import React, { useContext, useEffect, useRef, useState } from "react";
import Card from "../components/card/Card";
import Wrapper from "../components/wrapper/Wrapper";
import useObserver from "../hooks/useObserver";
import { getDataAction } from "../actions/RequestDataActions";
import { RootContext } from "../context/ContextApp";
import ListCard from "../components/card/ListCard";

const Users = ({ location }) => {
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
            {hasError && (
                <div className="columns is-12">
                    <h2 className="title is-2">
                        Ups!, Ha ocurrido un error :(
                    </h2>
                </div>
            )}
            <div className="columns is-multiline">
                <ListCard list={list} isLoading={isFirstRender} />
                <div ref={refObserver}></div>
            </div>
        </Wrapper>
    );
};

export default Users;
