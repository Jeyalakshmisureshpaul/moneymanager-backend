import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import { transactionRoute } from "./routes/transactions.js";


dotenv.config();

const app = express();



app.use(cors()); // cors - third party middleware

app.use(express.json()); // Inbuild middleware

const MONGO_URL = process.env.MONGO_URL; //DB URL

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌️😊");
  return client;
}
export const client = await createConnection();

const PORT = process.env.PORT || 5000;

app.get("/", function (req, res) {
  res.send("Hello hack");
});


app.use("/transaction", transactionRoute);

app.listen(PORT, () => {
  console.log("Server is Started");
});