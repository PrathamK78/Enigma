import app from "./app.js";
import { connectToDB } from "./db/connection.js";
//connections and listeners
//
const PORT = process.env.PORT || 5000;
connectToDB()
    .then(() => {
    app.listen (PORT,() =>
        console.log(`Server open and connected to DB on ${PORT} :)`)
        );
    })
    .catch((error) => console.log(error));
