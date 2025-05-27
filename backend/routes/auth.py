from fastapi import APIRouter, HTTPException
from backend.schemas.user import UserCreate, UserLogin
from backend.services.auth import signup, login

router = APIRouter()

@router.post("/signup")
def signup(user: UserCreate):
    return {"message": "User created successfully"}

@router.post("/auth/login", tags=["Auth"])
def login_user(user: UserLogin):
    token = login(user.email, user.password)
    if not token:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"access_token": token, "token_type": "bearer"}
