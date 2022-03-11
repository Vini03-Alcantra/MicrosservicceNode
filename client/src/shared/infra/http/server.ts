import {app} from "./app";
import "dotenv/config"

const PORT = process.env.PORT || 3009;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})