import mongoose from "mongoose";

mongoose.connect("mongodb+srv://brunalmucelli:123abc@alura.hdvjm2m.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;