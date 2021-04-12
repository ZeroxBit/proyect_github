import React, { useEffect, useRef, useState } from "react";
import Hero from "../components/hero/Hero";
import Wrapper from "../components/wrapper/Wrapper";
import BoxRepo from "../components/box/BoxRepo";
import { getSearchReposServices } from "../services/respoServices";
import InputSearch from "../components/Input/InputSearch";
import useObserver from "../hooks/useObserver";

const Repositories = () => {
    const [repositories, setRepositories] = useState(null);
    const [search, setSearch] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
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
            const result = await getSearchReposServices(search, nextPage);
            setPageNumber(nextPage);

            setRepositories({
                ...repositories,
                items: [...repositories.items, ...result.data.items],
            });
            if (hasError) setHasError(false);
        } catch (error) {
            setHasError(true);
        }
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        setPageNumber(1);
        try {
            const result = await getSearchReposServices(search, pageNumber);
            setRepositories(result.data);
            setIsFirstSearch(false);
            if (hasError) setHasError(false);
        } catch (error) {
            setHasError(true);
        }

        setIsLoading(false);
    };

    const handleChange = async (e) => {
        const name = e.target.value;
        setSearch(name);
    };

    const handlRenderRepositories = () => {
        if (!repositories) return null;

        return repositories.items.map(
            ({ owner, full_name, description, html_url }, i) => (
                <div className="column is-6" key={`${full_name}-${i}`}>
                    <BoxRepo
                        image={owner.avatar_url}
                        userLogin={owner.login}
                        fullName={full_name}
                        description={description}
                        urlRepo={html_url}
                    />
                </div>
            )
        );
    };

    return (
        <Wrapper>
            <div className="columns">
                <div className="column is-12">
                    <Hero>
                        <div className="hero-body">
                            <p className="title">Busca un repositorio</p>
                            <div className="column is-6">
                                <InputSearch
                                    onChange={handleChange}
                                    value={search}
                                    onSubmit={handleSubmit}
                                    isLoading={isLoading}
                                    placeholder="Ingresa un repositorio"
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
                {handlRenderRepositories()}
                <div ref={refObserver}></div>
            </div>
        </Wrapper>
    );
};

export default Repositories;
