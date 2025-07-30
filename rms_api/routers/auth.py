from datetime import timedelta, datetime

from fastapi.security import OAuth2PasswordRequestForm
from fastapi import Depends, HTTPException, status, APIRouter
from sqlalchemy import false
from sqlalchemy.orm import Session

from auth.auth_handler import authenticate_user, ACCESS_TOKEN_EXPIRE_MINUTES, create_access_token, get_user, \
    get_password_hash
from database import get_db
from schemas import Token, UserCreate, UserLogin, UserResponse
from models import User

router = APIRouter()


@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
def register_user(user: UserCreate,
                  db: Session = Depends(get_db)):
    print("##  USER  ##:", user)
    db_user = get_user(db, user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="email already registered.")
    hashed_password = get_password_hash(user.password)
    db_user = User(firstName=user.firstName,
                   surname=user.surname,
                   otherName=user.otherName,
                   email=user.email,
                   phone=user.phone,
                   password=hashed_password,
                   created_at=datetime.now(),


                   )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


@router.post("/login", response_model=UserResponse)
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = get_user(db, user.email)
    if not db_user:
        raise HTTPException(status_code=400, detail="email or password incorrect")

    hashed_password = get_password_hash(user.password)

    if db_user.password != hashed_password:
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    else:
        return db_user


@router.post("/token")
async def login_for_access_token(
        form_data: OAuth2PasswordRequestForm = Depends(),
        db: Session = Depends(get_db)
) -> Token:
    user = authenticate_user(db, form_data.email, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return Token(access_token=access_token, token_type="bearer")
