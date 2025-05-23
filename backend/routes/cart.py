from fastapi import APIRouter
from models import CartItem

router = APIRouter()
cart_db = []  # Simulated cart store

@router.post("/", response_model=list[CartItem])
def add_to_cart(item: CartItem):
    cart_db.append(item)
    return cart_db
