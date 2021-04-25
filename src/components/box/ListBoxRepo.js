import React from "react";
import PropTypes from "prop-types";
import BoxRepo from "./BoxRepo";

const ListBoxRepo = ({ list, isLoading }) => {
    if (!list || isLoading) return null;

    return list.items.map(({ owner, full_name, description, html_url }, i) => (
        <div className="column is-6" key={`${full_name}-${i}`}>
            <BoxRepo
                image={owner.avatar_url}
                userLogin={owner.login}
                fullName={full_name}
                description={description}
                urlRepo={html_url}
            />
        </div>
    ));
};

ListBoxRepo.propTypes = {
    list: PropTypes.shape({
        items: PropTypes.array.isRequired,
    }),
    isLoading: PropTypes.bool.isRequired,
};

export default ListBoxRepo;
