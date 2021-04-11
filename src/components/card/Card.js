import React from "react";
import PropTypes from "prop-types";

const Card = ({ img, text, cardPointer }) => {
    return (
        <div className={`card ${cardPointer ? "is-clickable" : ""}`}>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={img} alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{text}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    cardPointer: PropTypes.bool,
};

export default Card;
