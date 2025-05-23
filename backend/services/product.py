import json
from pathlib import Path

def load_dummy_products():
    data_path = Path(__file__).resolve().parent.parent / "data" / "dummy_products.json"
    with open(data_path, "r") as file:
        products = json.load(file)
    return products

def get_product_by_id(product_id: int):
    products = load_dummy_products()
    for product in products:
        if product["id"] == product_id:
            return product
    return None
