import React, { useState } from "react";
import Hero from "../components/hero/Hero";
import Wrapper from "../components/wrapper/Wrapper";
import BoxRepo from "../components/box/BoxRepo";
import { getSearchReposServices } from "../services/respoServices";
import InputSearch from "../components/Input/InputSearch";

const Repositories = () => {
    const [repositories, setRepositories] = useState(null);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);

        try {
            const result = await getSearchReposServices(search);

            setRepositories(result.data);
            setHasError(false);
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
                        <div class="hero-body">
                            <p class="title">Busca un repositorio</p>
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
            <div className="columns is-multiline">
                {handlRenderRepositories()}
            </div>
        </Wrapper>
    );
};

export default Repositories;
