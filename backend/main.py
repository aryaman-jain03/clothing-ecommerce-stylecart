from fastapi import FastAPI
from backend.routes import products  # import the product routes
from backend.routes import cart
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

from backend.routes import auth
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # allow your frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)

app.include_router(cart.router)
app.include_router(products.router)  # register the router
