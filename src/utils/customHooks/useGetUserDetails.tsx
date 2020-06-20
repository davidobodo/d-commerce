import { useSelector } from "react-redux";

export const useGetUserDetails = () => {
    const userId = useSelector((state) => state.auth.userId);
    const allUsers = useSelector(
        (state) => state.firestoreReducer.ordered.users
    );

    let loggedInUser;
    if (allUsers && userId) {
        loggedInUser = allUsers.filter((user) => userId === user.id);
    }

    return loggedInUser;
};
