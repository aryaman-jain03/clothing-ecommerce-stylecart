from pydantic import BaseModel
from typing import List, Optional
from . import Product



class Product(BaseModel):
    id: int
    name: str
    category: str
    price: float
    image: str
    sizes: List[str]
    inStock: bool
    description: str

class User(BaseModel):
    id: int
    email: str
    password: str  # In production, use hashed passwords

class CartItem(BaseModel):
    product_id: int
    quantity: int

class Order(BaseModel):
    id: int
    user_id: int
    items: List[CartItem]
    total_price: float
