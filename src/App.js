import axios from "axios";
import React, { useEffect } from "react"

function App() {

    useEffect(() => {

        axios.get("https://api.github.com/users/").then(value => console.log("value", value)).catch(err => console.log("error", err))

    }, [])

    return (
        <div className="App">
        github
        </div>
    );
}

export default App;
