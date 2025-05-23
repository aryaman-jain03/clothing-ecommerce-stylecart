from fastapi import APIRouter
import json
from ..db.models.products import Product 
from pathlib import Path

router = APIRouter()

@router.get("/", response_model=list[Product])
def get_products():
    file = Path("db/products.json")
    with open(file, "r") as f:
        data = json.load(f)
    return data

@router.get("/{product_id}", response_model=Product)
def get_product_by_id(product_id: int):
    file = Path("db/products.json")
    with open(file, "r") as f:
        products = json.load(f)
    for product in products:
        if product["id"] == product_id:
            return product
    return {"error": "Product not found"}
