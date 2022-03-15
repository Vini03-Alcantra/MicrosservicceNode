import express from "express";
import {produtoRoute} from "./routes";
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use(produtoRoute)

export {app}
