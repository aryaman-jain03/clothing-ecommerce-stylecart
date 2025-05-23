from fastapi import FastAPI
from backend.routes import order, products, cart, auth

app = FastAPI()

# Include route modules
app.include_router(products.router, prefix="/products")
app.include_router(cart.router, prefix="/cart")
app.include_router(auth.router, prefix="/auth")
app.include_router(order.router, prefix="/checkout")

@app.get("/")
def read_root():
    return {"message": "Welcome to StyleCart API"}
