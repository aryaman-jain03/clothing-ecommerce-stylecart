from backend.services.product import get_product_by_id

def add_to_cart(product_id: int, quantity: int):
    product = get_product_by_id(product_id)
    if not product:
        return None
    cart_item = {
        "product": product,
        "quantity": quantity,
        "total_price": quantity * product["price"]
    }
    return cart_item

def checkout(items: list):
    cart = []
    grand_total = 0

    for item in items:
        product = get_product_by_id(item.product_id)
        if not product:
            return None  # Or raise error later in route
        item_total = item.quantity * product["price"]
        cart.append({
            "product": product,
            "quantity": item.quantity,
            "total_price": item_total
        })
        grand_total += item_total

    return {
        "items": cart,
        "grand_total": grand_total
    }
