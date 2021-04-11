import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const InputSearch = ({ onChange, value, onSubmit, isLoading, placeholder }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form class="field" onSubmit={handleSubmit}>
            <p class="control has-icons-right">
                <input
                    className="input is-medium"
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />

                <button
                    class={`button input-search__button ${
                        isLoading ? "is-loading" : ""
                    }`}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </p>
        </form>
    );
};

InputSearch.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    placeholder: PropTypes.string,
};

export default InputSearch;
