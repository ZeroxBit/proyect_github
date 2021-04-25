import React, { useContext, useEffect, useRef, useState } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import useObserver from "../hooks/useObserver";
import { RootContext } from "../context/ContextApp";
import { getDataAction } from "../actions/RequestDataActions";
import ListBoxRepo from "../components/box/ListBoxRepo";

const Repositories = ({ location }) => {
    const [pageNumber, setPageNumber] = useState(1);
    const [hasError, setHasError] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);

    const { list, setList, search, setSearch, isActivePaginate } = useContext(
        RootContext
    );

    const refObserver = useRef(null);
    const { isNearScreen } = useObserver({
        distance: "100px",
        externalRef: refObserver,
    });

    useEffect(() => {
        setList(null);
        setSearch("");
        setIsFirstRender(false);
    }, []);

    useEffect(() => {
        if (!!list && isActivePaginate && !isFirstRender) {
            handlePaginate();
        }

        return () => {
            setPageNumber(1);
        };
    }, [isNearScreen]);

    const handlePaginate = async () => {
        const nextPage = pageNumber + 1;
        const { error, data } = await getDataAction(
            search,
            nextPage,
            location.pathname
        );

        if (error) {
            setHasError(!!error);
            setList(null);
            return;
        }

        setPageNumber(nextPage);

        setList({
            ...list,
            items: [...list.items, ...data.items],
        });
    };

    return (
        <Wrapper>
            <div className="columns">
                <div className="column is-12"></div>
            </div>
            {hasError && (
                <div className="columns is-12">
                    <h2 className="title is-2">
                        Ups!, Ha ocurrido un error :(
                    </h2>
                </div>
            )}
            <div className="columns is-multiline">
                <ListBoxRepo list={list} isLoading={isFirstRender} />
                <div ref={refObserver}></div>
            </div>
        </Wrapper>
    );
};

export default Repositories;
