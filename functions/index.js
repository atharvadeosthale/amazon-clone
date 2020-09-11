const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPvTBIOljmntfcQ2sqWB66v8kmmy5YyMAL3Q2xNyKVZ48UeP3vVKMWhiUO0yoaC3XCeVq3NSTRiOCC4a43N33do004pCo3n1C"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log(total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//exports.api = functions.https.onRequest(app);
app.listen(5000);
