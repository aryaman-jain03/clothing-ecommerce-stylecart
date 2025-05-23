from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
from .cart import CartItem

class Order(BaseModel):
    id: int
    user_id: int
    items: List[CartItem]
    total_price: float


router = APIRouter()
orders_db = []

@router.post("/")
def place_order(order: Order):
    orders_db.append(order)
    return {"message": "Order placed successfully!", "order_id": order.id}
