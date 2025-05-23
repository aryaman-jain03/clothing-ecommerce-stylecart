from fastapi import APIRouter
from models import User

router = APIRouter()
users_db = []

@router.post("/signup")
def signup(user: User):
    users_db.append(user)
    return {"message": "User registered successfully"}

@router.post("/login")
def login(user: User):
    for u in users_db:
        if u.email == user.email and u.password == user.password:
            return {"token": "fake-jwt-token", "user": u.email}
    return {"error": "Invalid credentials"}
