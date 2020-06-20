import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetUserDetails } from "../../../utils/customHooks/useGetUserDetails";
import Layout from "../../shared/layout/layout";
import Input from "../../shared/input/input";
import Button from "../../shared/button/button";

import { DashboardPageContainer } from "./style";
import { getUserDataStart } from "../../../redux/actions/user";

const FORM_FIELDS = [
    {
        old_title: "Old Email",
        new_title: "New Email",
        btn_text: "Update Email",
    },
    {
        old_title: "Old Password",
        new_title: "New Password",
        btn_text: "Update Password",
    },
];

const DashboardPage = () => {
    const dispatch = useDispatch();
    const user = useGetUserDetails();
    console.log(user);

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
                    <div>
                        <span>First Name</span>
                        <Input value={user[0].firstName} readOnly={true} />
                    </div>
                    <div>
                        <span>Last Name</span>
                        <Input value={user[0].lastName} readOnly={true} />
                    </div>
                </form>

                <form className="section two">
                    <div>
                        <span>New Email</span>
                        <Input />
                    </div>
                    <Button>Update Email</Button>
                </form>
                <form className="section three">
                    <div>
                        <span>Old Password</span>
                        <Input />
                    </div>
                    <div>
                        <span>New Password</span>
                        <Input />
                    </div>
                    <Button>Update Password</Button>
                </form>
            </DashboardPageContainer>
        </Layout>
    );
};

export default DashboardPage;
