import { getSearchReposServices } from "../services/respoServices";
import { getSearchUsersServices } from "../services/userServices";

export const getDataAction = async (search, pageNumber, location) => {
    const getData = getServicesByLocation(location);

    try {
        const { data } = await getData(search, pageNumber);

        return { error: null, data };
    } catch (error) {
        return { error, data: null };
    }
};

const getServicesByLocation = (location) => {
    if (location !== "/") {
        return getSearchReposServices;
    }

    return getSearchUsersServices;
};
