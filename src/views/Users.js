import React, { useState } from "react";
import Card from "../components/card/Card";
import Hero from "../components/hero/Hero";
import { getSearchUsersServices } from "../services/userServices";

const Users = () => {
    const [users, setUsers] = useState(null);

    const handleChange = async (e) => {
        const name = e.target.value;
        getSearchUsersServices(name)
            .then((result) => {
                console.log("resultt", result.data);
                setUsers(result.data);
            })
            .catch((err) => {
                console.log("errorr", err);
            });
    };

    const handlRenderUsers = () => {
        if (!users) return null;
        return users.items.map(({ avatar_url, login }, i) => (
            <div className="column is-3" key={`${login}-${i}`}>
                <Card img={avatar_url} text={login} cardPointer />
            </div>
        ));
    };

    return (
        <div className="container mt-6">
            <div className="columns">
                <div className="column is-12">
                    <Hero>
                        <div class="hero-body">
                            <p class="title">Buscame en Github</p>
                            <div className="column is-6">
                                <input
                                    className="input is-medium"
                                    placeholder="Ingresa un nombre"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </Hero>
                </div>
            </div>
            <div className="columns is-multiline">{handlRenderUsers()}</div>
        </div>
    );
};

export default Users;
