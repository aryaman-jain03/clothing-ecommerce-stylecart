from fastapi import APIRouter, HTTPException
from backend.schemas.user import UserCreate, UserLogin
from backend.services.auth import signup, login

router = APIRouter()

@router.post("/auth/signup", tags=["Auth"])
def register_user(user: UserCreate):
    new_user = signup(user)
    if not new_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return {"msg": "User created successfully", "user": new_user}

@router.post("/auth/login", tags=["Auth"])
def login_user(user: UserLogin):
    token = login(user.email, user.password)
    if not token:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"access_token": token, "token_type": "bearer"}
