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
} from "../../../redux/actions/user";

const DashboardPage = () => {
    const dispatch = useDispatch();
    const user = useGetUserDocument();
    const [newEmail, setNewEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const isLoading = useSelector((state) => state.user.isloading);
    const updateEmailSuccessMsg = useSelector(
        (state) => state.user.updateEmailSuccessMsg
    );
    const updateEmailFailMsg = useSelector(
        (state) => state.user.updateEmailFailMsg
    );

    const handleOnChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        name?: string
    ): void => {
        if (name === "new-email") {
            setNewEmail(e.target.value);
        }

        if (name === "old-password") {
        }

        if (name === "new-password") {
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
    };

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

                <form
                    className="section two"
                    onSubmit={(e) => handleOnSubmit(e, "new-email")}
                >
                    <div>
                        <span>New Email</span>
                        <Input
                            value={newEmail}
                            handleOnChange={(e) =>
                                handleOnChange(e, "new-email")
                            }
                        />
                    </div>
                    <Button blue_small_text disabled={isLoading ? true : false}>
                        {isLoading ? "Updating Email ..." : "Update Email"}
                    </Button>
                    {updateEmailSuccessMsg && (
                        <h5 className="msg success">{updateEmailSuccessMsg}</h5>
                    )}
                    {updateEmailFailMsg && (
                        <h5 className="msg fail">{updateEmailFailMsg}</h5>
                    )}
                </form>
                <form className="section three">
                    <div>
                        <span>Old Password</span>
                        <Input
                            value={oldPassword}
                            handleOnChange={(e) =>
                                handleOnChange(e, "old-password")
                            }
                        />
                    </div>
                    <div>
                        <span>New Password</span>
                        <Input
                            value={newPassword}
                            handleOnChange={(e) =>
                                handleOnChange(e, "new-password")
                            }
                        />
                    </div>
                    <Button>Update Password</Button>
                </form>
            </DashboardPageContainer>
        </Layout>
    );
};

export default DashboardPage;
