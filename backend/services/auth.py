from backend.schemas.user import UserCreate
from passlib.context import CryptContext
from jose import jwt
from datetime import datetime, timedelta

# Secret key for JWT
SECRET_KEY = "your-secret-key"  # use a strong key in production
ALGORITHM = "HS256"

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
users_db = {}  # simple in-memory store

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict, expires_delta: timedelta = timedelta(hours=1)):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def signup(user: UserCreate):
    if user.email in users_db:
        return None
    hashed_pw = hash_password(user.password)
    users_db[user.email] = {"name": user.name, "email": user.email, "hashed_password": hashed_pw}
    return users_db[user.email]

def login(email: str, password: str):
    user = users_db.get(email)
    if not user or not verify_password(password, user["hashed_password"]):
        return None
    return create_access_token({"sub": email})
