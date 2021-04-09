import axios from "axios";
import React, { useEffect } from "react"
import env from "react-dotenv";
import { getUsersServices } from "./services/userServices";

function App() {
    console.log("url", env.API_URL)
    useEffect(() => {

        getUsersServices().then(value => console.log("value", value)).catch(err => console.log("error", err))

    }, [])

    return (
        <div className="App">
            github
        </div>
    );
}

export default App;
