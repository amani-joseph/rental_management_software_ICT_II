from datetime import timedelta, datetime
from fastapi import Request, Depends, HTTPException, status
from fastapi import Depends, HTTPException, status, APIRouter
from fastapi.security import OAuth2PasswordRequestForm
from jose import JWTError, jwt
from sqlalchemy.orm import Session

from auth.auth_handler import authenticate_user, ACCESS_TOKEN_EXPIRE_MINUTES, create_access_token, get_user, \
    get_password_hash, oauth2_scheme, SECRET_KEY, ALGORITHM, get_user_by_email, create_jwt_token
from database import get_db
from models import User
from schemas import UserCreate, UserResponse, UserLogin

router = APIRouter()


@router.post("/register",
             response_model=UserResponse, status_code=status.HTTP_201_CREATED,tags=["auth"])
def register_user(user: UserCreate,
                  db: Session = Depends(get_db)):
    print("#########")
    print("user:", user)
    print("#########")
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


@router.post("/login", status_code=status.HTTP_200_OK, tags=["auth"])
def login(user: UserLogin,
          db: Session = Depends(get_db)):
    db_user = authenticate_user(user.email, user.password, db)
    print(db_user)

    if not db_user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    token_data = {"sub": user.email}
    token = create_jwt_token(data=token_data)
    return {"access_token": token, "token_type": "bearer"},


def verify_token(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=403, detail="Token is invalid or expired")
        return payload
    except JWTError:
        raise HTTPException(status_code=403, detail="Token is invalid or expired")


@router.get("/verify-token/{token}",tags=["auth"])
async def verify_user_token(token: str):
    verify_token(token=token)
    return {"message": "Token is valid"}
