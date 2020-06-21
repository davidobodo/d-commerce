import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetUserDocument } from "../../../utils/customHooks/useGetUserDocument";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Button from "../../shared/button/button";

import { DashboardPageContainer } from "./style";
import {
    getUserDataStart,
    updateEmailStart,
    updatePasswordStart,
} from "../../../redux/actions/user";

const DashboardPage = () => {
    const dispatch = useDispatch();
    const user = useGetUserDocument();
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const emailIsLoading = useSelector((state) => state.user.emailIsLoading);
    const passwordIsLoading = useSelector(
        (state) => state.user.passwordIsLoading
    );
    const updateEmailSuccessMsg = useSelector(
        (state) => state.user.updateEmailSuccessMsg
    );
    const updateEmailFailMsg = useSelector(
        (state) => state.user.updateEmailFailMsg
    );
    const updatePasswordSuccessMsg = useSelector(
        (state) => state.user.updatePasswordSuccessMsg
    );
    const updatePasswordFailMsg = useSelector(
        (state) => state.user.updatePasswordFailMsg
    );

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        name?: string
    ): void => {
        if (name === "new-email") {
            setNewEmail(e.target.value);
        }

        if (name === "new-password") {
            setNewPassword(e.target.value);
        }
    };

    const handleOnSubmit = (
        e: React.FormEvent<HTMLFormElement>,
        name?: string
    ) => {
        e.preventDefault();
        if (name === "new-email") {
            const idToken = localStorage.getItem("token");
            const payload = {
                idToken,
                newEmail,
            };
            dispatch(updateEmailStart(payload));
            return;
        }

        if (name === "new-password") {
            const idToken = localStorage.getItem("token");
            const payload = {
                idToken,
                newPassword,
            };
            dispatch(updatePasswordStart(payload));
            return;
        }
    };

    const FORM_FIELDS = [
        {
            name: "new-email",
            label: "New Email",
            loadingText: "Updating Email ...",
            notLoadingText: "Update Email",
            successMsg: updateEmailSuccessMsg,
            failureMsg: updateEmailFailMsg,
            state: newEmail,
            isLoading: emailIsLoading,
        },
        {
            name: "new-password",
            label: "New Password",
            loadingText: "Updating Password ...",
            notLoadingText: "Update Password",
            successMsg: updatePasswordSuccessMsg,
            failureMsg: updatePasswordFailMsg,
            state: newPassword,
            isLoading: passwordIsLoading,
        },
    ];

    // useEffect(() => {
    //     const idToken = localStorage.getItem("token");
    //     dispatch(getUserDataStart(idToken));
    // }, []);

    return (
        <Layout isFooterPresent={true}>
            <DashboardPageContainer>
                <div className="header">
                    <h1>Dashboard</h1>
                </div>
                <form className="section one">
                    {user && (
                        <Fragment>
                            <div>
                                <span>First Name</span>
                                <Input value={user.firstName} readOnly={true} />
                            </div>
                            <div>
                                <span>Last Name</span>
                                <Input value={user.lastName} readOnly={true} />
                            </div>
                        </Fragment>
                    )}
                </form>
                {FORM_FIELDS.map((field) => {
                    const {
                        name,
                        label,
                        loadingText,
                        notLoadingText,
                        successMsg,
                        failureMsg,
                        state,
                        isLoading,
                    } = field;
                    return (
                        <form
                            className="section two"
                            onSubmit={(e) => handleOnSubmit(e, name)}
                            key={name}
                        >
                            <div>
                                <span>{label}</span>
                                <Input
                                    value={state}
                                    handleOnChange={(e) =>
                                        handleOnChange(e, name)
                                    }
                                />
                            </div>
                            <Button
                                blue_small_text
                                disabled={isLoading ? true : false}
                            >
                                {isLoading ? loadingText : notLoadingText}
                            </Button>
                            {successMsg && (
                                <h5 className="msg success">{successMsg}</h5>
                            )}
                            {failureMsg && (
                                <h5 className="msg fail">{failureMsg}</h5>
                            )}
                        </form>
                    );
                })}
            </DashboardPageContainer>
        </Layout>
    );
};

export default DashboardPage;
