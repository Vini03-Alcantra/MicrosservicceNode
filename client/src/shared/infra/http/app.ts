import express from "express";
import {clientRoute} from "./routes";

const app = express()

app.use(express.json())
app.use(clientRoute)

export { app }