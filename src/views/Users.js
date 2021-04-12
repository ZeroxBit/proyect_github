import React, { useEffect, useRef, useState } from "react";
import Card from "../components/card/Card";
import Hero from "../components/hero/Hero";
import { getSearchUsersServices } from "../services/userServices";
import InputSearch from "../components/Input/InputSearch";
import Wrapper from "../components/wrapper/Wrapper";
import useObserver from "../hooks/useObserver";

const Users = () => {
    const [users, setUsers] = useState(null);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [isFirstSearch, setIsFirstSearch] = useState(true);
    const refObserver = useRef(null);
    const { isNearScreen } = useObserver({
        distance: "100px",
        externalRef: refObserver,
    });

    useEffect(() => {
        if ((!isLoading, !isFirstSearch)) {
            handlePaginate();
        }
    }, [isNearScreen]);

    const handlePaginate = async () => {
        try {
            const nextPage = pageNumber + 1;
            const result = await getSearchUsersServices(search, nextPage);
            setPageNumber(nextPage);

            setUsers({
                ...users,
                items: [...users.items, ...result.data.items],
            });
            if (hasError) setHasError(false);
        } catch (error) {
            setHasError(true);
        }
    };

    const handleChange = async (e) => {
        const name = e.target.value;
        setSearch(name);
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        const initialPage = 1;
        try {
            const result = await getSearchUsersServices(search, initialPage);
            setUsers(result.data);
            setIsFirstSearch(false);
            setPageNumber(initialPage);
            if (hasError) setHasError(false);
        } catch (error) {
            setHasError(true);
        }

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
        <Wrapper>
            <div className="columns">
                <div className="column is-12">
                    <Hero>
                        <div className="hero-body">
                            <p className="title">Buscame en Github</p>
                            <div className="column is-6">
                                <InputSearch
                                    onChange={handleChange}
                                    value={search}
                                    onSubmit={handleSubmit}
                                    isLoading={isLoading}
                                    placeholder="Ingresa un nombre"
                                />
                            </div>
                        </div>
                    </Hero>
                </div>
            </div>
            {hasError && (
                <div className="columns is-12">
                    <h2 className="title is-2">
                        Ups!, Ha ocurrido un error :(
                    </h2>
                </div>
            )}
            <div className="columns is-multiline">
                {handlRenderUsers()}
                <div ref={refObserver}></div>
            </div>
        </Wrapper>
    );
};

export default Users;
