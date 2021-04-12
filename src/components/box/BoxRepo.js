import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";

const BoxRepo = ({ image, fullName, userLogin, description, urlRepo }) => {
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={image} alt={fullName} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{fullName}</strong>{" "}
                            <small>@{userLogin}</small>
                            <br />
                            {description}
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a
                                href={urlRepo}
                                target="_blank"
                                className="level-item"
                                aria-label="reply"
                            >
                                <span className="icon is-small">
                                    <FontAwesomeIcon icon={faBookReader} />
                                </span>
                            </a>
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    );
};

BoxRepo.propTypes = {};

export default BoxRepo;
