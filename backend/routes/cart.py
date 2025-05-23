from fastapi import APIRouter, HTTPException
from backend.schemas.cart import CartItemRequest
from backend.services.cart import add_to_cart

router = APIRouter()

@router.post("/cart", tags=["Cart"])
def post_cart(item: CartItemRequest):
    result = add_to_cart(item.product_id, item.quantity)
    if not result:
        raise HTTPException(status_code=404, detail="Product not found")
    return result

from backend.schemas.cart import CheckoutRequest
from backend.services.cart import checkout

@router.post("/checkout", tags=["Cart"])
def post_checkout(order: CheckoutRequest):
    result = checkout(order.items)
    if result is None:
        raise HTTPException(status_code=404, detail="One or more products not found")
    return result
