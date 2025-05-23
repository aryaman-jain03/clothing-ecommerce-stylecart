from pydantic import BaseModel

class CartItemRequest(BaseModel):
    product_id: int
    quantity: int  

from typing import List

class CheckoutRequest(BaseModel):
    items: List[CartItemRequest]

