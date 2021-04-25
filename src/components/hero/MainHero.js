import { useContext, useState } from "react";
import { useLocation } from "react-router";
import { getDataAction } from "../../actions/RequestDataActions";
import { RootContext } from "../../context/ContextApp";
import InputSearch from "../Input/InputSearch";
import Wrapper from "../wrapper/Wrapper";
import Hero from "./Hero";
import HeroBody from "./HeroBody";

const MainHero = () => {
    const { search, setSearch, setList, setIsActivePaginate } = useContext(
        RootContext
    );
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    const handleRenderTitle = (title) => {
        if (location.pathname !== "/") {
            return `${title} Repositorio`;
        }

        return `${title} Usuario`;
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        handleActivePaginate(false);

        const { data } = await getDataAction(search, 1, location.pathname);

        setList(data);
        setIsLoading(false);
        handleActivePaginate(!!data);
    };

    const handleActivePaginate = (isActive) => {
        setTimeout(() => {
            setIsActivePaginate(isActive);
        }, 400);
    };

    const handleIsRender = () => {
        return location.pathname === "/login";
    };

    return handleIsRender() ? null : (
        <Wrapper>
            <Hero>
                <HeroBody title={handleRenderTitle("Busca un")}>
                    <InputSearch
                        onChange={setSearch}
                        value={search}
                        onSubmit={handleSubmit}
                        isLoading={isLoading}
                        placeholder={handleRenderTitle("Ingresa un")}
                    />
                </HeroBody>
            </Hero>
        </Wrapper>
    );
};

export default MainHero;
