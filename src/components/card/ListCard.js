import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const ListCard = ({ list, isLoading }) => {
    if (!list || isLoading) return null;

    return list.items.map(({ avatar_url, login }, i) => (
        <div className="column is-3" key={`${login}-${i}`}>
            <Card img={avatar_url} text={login} cardPointer />
        </div>
    ));
};

ListCard.propTypes = {
    list: PropTypes.shape({
        items: PropTypes.array.isRequired,
    }),
    isLoading: PropTypes.bool.isRequired,
};

export default ListCard;
