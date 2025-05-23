from fastapi import FastAPI
from routes import products, cart, auth, orders

app = FastAPI()

# Include route modules
app.include_router(products.router, prefix="/products")
app.include_router(cart.router, prefix="/cart")
app.include_router(auth.router, prefix="/auth")
app.include_router(orders.router, prefix="/checkout")

@app.get("/")
def read_root():
    return {"message": "Welcome to StyleCart API"}
