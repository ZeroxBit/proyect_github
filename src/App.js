import React, { useEffect, useState } from "react";
import env from "react-dotenv";
import { NavBar } from "./components/NavBar";
import { getSearchUsersServices } from "./services/userServices";
import "./style/style.scss";

function App() {
    console.log("url", env.API_URL);
    const [data, setData] = useState([]);
    useEffect(() => {
        // getUsersServices()
        //     .then((value) => setData(value.data))
        //     .catch((err) => console.log("error", err));
    }, []);

    const handleChange = async (e) => {
        const name = e.target.value;
        getSearchUsersServices(name)
            .then((result) => {
                console.log("resultt", result.data);
            })
            .catch((err) => {
                console.log("errorr", err);
            });
    };

    console.log("data", data);
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="column is-12">
                    <input
                        className="input is-normal"
                        type="text"
                        placeholder="Normal input"
                        onChange={handleChange}
                    />
                </div>
                <div className="column is-3">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={""} alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media-content">
                                <p className="title is-4">@ Krlos</p>
                            </div>
                        </div>
                        <footer className="card-footer">
                            <a href="#" className="card-footer-item">
                                Conoceme
                            </a>
                            <a href="#" className="card-footer-item">
                                Repos
                            </a>
                            <a href="#" className="card-footer-item">
                                Eliminar
                            </a>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
