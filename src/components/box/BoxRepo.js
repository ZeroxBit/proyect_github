import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";

const BoxRepo = ({ image, fullName, userLogin, description, urlRepo }) => {
    return (
        <div class="box">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-64x64">
                        <img src={image} alt={fullName} />
                    </figure>
                </div>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>{fullName}</strong>{" "}
                            <small>@{userLogin}</small>
                            <br />
                            {description}
                        </p>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <a
                                href={urlRepo}
                                target="_blank"
                                class="level-item"
                                aria-label="reply"
                            >
                                <span class="icon is-small">
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
