import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUserDocumentStart } from "../../redux/actions/user";

export const useGetUserDocument = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.userId);
    const userDocument = useSelector((state) => state.user.data);

    React.useEffect(() => {
        dispatch(getUserDocumentStart(userId));
    }, []);

    return userDocument;
};
