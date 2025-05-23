from fastapi import APIRouter, HTTPException
from typing import List
from backend.services.product import load_dummy_products, get_product_by_id

router = APIRouter()

@router.get("/products", tags=["Products"])
def get_products():
    return load_dummy_products()

@router.get("/products/{product_id}", tags=["Products"])
def get_product(product_id: int):
    product = get_product_by_id(product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product
