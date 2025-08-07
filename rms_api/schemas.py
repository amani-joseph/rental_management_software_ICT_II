from pydantic import BaseModel


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str | None = None


class UserCreate(BaseModel):
    firstName: str
    surname: str
    otherName: str
    email: str
    phone: str
    password: str
    confirmPassword: str


class UserLogin(BaseModel):
    email: str
    password: str


class UserResponse(BaseModel):
    firstName: str
    surname: str
    otherName: str
    email: str
    phone: str

    # role = str
    # status = bool
    # login_attempts = int

    class Config():
        orm_mode = True


class UserInDB(UserResponse):
    hashed_password: str


class PropertyCreate(BaseModel):
    street: int
    streetNumber: int
    city: str
    state: str
    zip: int
    type: str
    occupancy: bool
    tenant: str
    leaseStart: str
    leaseEnd: str
    rent: int
    bathrooms: int
    bedrooms: int
    parking: int


class TenantCreate(BaseModel):
    firstName: str
    surname: str
    otherName: str
    email: str
    phone: str
    street: int
    streetNumber: int
    city: str
    state: str
    zip: int
    rentStatus: bool
    rent: int
    leaseStart: str
    leaseEnd: str
