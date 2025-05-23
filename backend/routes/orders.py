from fastapi import APIRouter
from models import Order

router = APIRouter()
orders_db = []

@router.post("/")
def place_order(order: Order):
    orders_db.append(order)
    return {"message": "Order placed successfully!", "order_id": order.id}
