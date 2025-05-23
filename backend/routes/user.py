from pydantic import BaseModel

class User(BaseModel):
    id: int
    email: str
    password: str  # In production, use hashed passwords
