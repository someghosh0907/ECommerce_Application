const express = require("express");
const dotenv = require("dotenv").config();
const uuid = require("uuid")
const cors = require("cors");
const morgan = require("morgan");
const port = 3400;

//MONGODB URL
const DB_URL =
  "mongodb+srv://soumyajitghosh:someghosh01@cluster0.gvd7cbr.mongodb.net/Ecomm-app?retryWrites=true&w=majority";
//REST object
const app = express();

//routes import
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

//STRIPE SERVERSIDE
const stripe = require("stripe")(
  "sk_test_51NrcT3SBcRIJMUWb1vzI0eUsfqlDqRt9EQG1w7s6HIYQtSMpAFvnOE6YJ3K0Q8hCPqTQVqHf7XcL2u1DcIXl1u4000u7F8hUuJ"
);
//DBmodel import
const { default: mongoose } = require("mongoose");
//middlewares
app.use(cors({origin:"http://localhost:3000"}));
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/cart", cartRoutes);

//MONGO CONNECT
mongoose
  .connect(DB_URL)
  .then((result) => console.log("DB connected"))
  .catch((error) => console.log(error));

//STRIPE
app.post("/payment", async (req, res) => {
  const {CART, token } = req.body;
  console.log("Product", CART);
  //console.log("Price", product.price);

  // To avoid duplication for payments
  const idempotencyKey = uuid;
  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charger.create(
        {
          amount: CART.price * 100,
          currency: "inr",
          customer: customer.id,
          receipt_email: token.email,
          description: `purchase of $(product.name)`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { idempotencyKey }
      );
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`app running on localhost ${port}`);
});
