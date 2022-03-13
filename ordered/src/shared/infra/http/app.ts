import express from "express"
import morgan from "morgan"
import axios from "axios"
import helmet from "helmet"
import cors from "cors"

import {orderedRoute} from "./routes"

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(orderedRoute)


export {app}