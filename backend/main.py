from fastapi import FastAPI
from backend.routes import products  # import the product routes
from backend.routes import cart

app = FastAPI()

from backend.routes import auth
app.include_router(auth.router)

app.include_router(cart.router)
app.include_router(products.router)  # register the router
