import express from "express"
import morgan from "morgan"
import axios from "axios"
import helmet from "helmet"
import cors from "cors"

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

export {app}