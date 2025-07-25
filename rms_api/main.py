import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine
from routers import user, auth
import models

app = FastAPI()
models.Base.metadata.create_all(bind=engine)

origins = [
    "http://localhost:3000",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],

)

app.include_router(user.router)
app.include_router(auth.router, prefix="/auth")
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
