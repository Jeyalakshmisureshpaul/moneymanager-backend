import { ObjectId } from "mongodb";
import { client } from "./index.js";

//update data by id in database
export async function updatetransaction(updateData, id) {
  return await client
    .db("money")
    .collection("transaction")
    .updateOne({ _id: ObjectId(id) }, { $set: updateData });
}

//get all the data in database
export async function getTransaction() {
  return await client.db("money").collection("transaction").find({}).toArray();
}

//get data by id in database
export async function getTransactionById(id) {
  return await client
    .db("money")
    .collection("transaction")
    .findOne({ _id: ObjectId(id) });
}

//create data in database
export async function createTransaction(data) {
  return await client.db("money").collection("transaction").insertMany(data);
}

//delete data by id in database
export async function deleteTransactionById(id) {
  return await client
    .db("money")
    .collection("transaction")
    .deleteOne({ _id: ObjectId(id) });
}