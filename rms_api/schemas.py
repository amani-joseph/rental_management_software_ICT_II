from pydantic import BaseModel


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None


class UserCreate(BaseModel):
    f_name: str
    surname: str
    l_name: str
    email: str
    phone_number: str
    password: str
    confirm_password: str


class UserResponse(BaseModel):
    f_name: str
    surname: str
    l_name: str
    email: str
    phone_number: str

    class Config():
        orm_mode = True


class UserInDB(UserResponse):
    hashed_password: str
