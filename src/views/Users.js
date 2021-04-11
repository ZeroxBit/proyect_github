import React, { useState } from "react";
import Card from "../components/card/Card";
import Hero from "../components/hero/Hero";
import { getSearchUsersServices } from "../services/userServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import InputSearch from "../components/Input/InputSearch";

const Users = () => {
    const [users, setUsers] = useState(null);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = async (e) => {
        const name = e.target.value;
        setSearch(name);
    };

    const handleRequest = async () => {
        console.log("handleKeyPress");
        setIsLoading(true);
        await getSearchUsersServices(search)
            .then((result) => {
                console.log("resultt", result.data);
                setUsers(result.data);
            })
            .catch((err) => {
                console.log("errorr", err);
            });
        setIsLoading(false);
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
                                <InputSearch
                                    onChange={handleChange}
                                    value={search}
                                    onSubmit={handleRequest}
                                    isLoading={isLoading}
                                    placeholder="Ingresa un nombre"
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
