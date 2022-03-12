import express from "express";
import {produtoRoute} from "./routes";

const app = express()

app.use(express.json())
app.use(produtoRoute)

export {app}
