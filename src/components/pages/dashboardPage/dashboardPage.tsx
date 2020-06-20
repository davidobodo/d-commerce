import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
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

    useEffect(() => {
        const idToken = localStorage.getItem("token");
        dispatch(getUserDataStart(idToken));
    }, []);

    return (
        <Layout isFooterPresent={true}>
            <DashboardPageContainer>
                <div className="header">
                    <h1>Dashboard</h1>
                </div>
                <form className="section one">
                    <div>
                        <span>First Name</span>
                        <Input />
                    </div>
                    <div>
                        <span>Last Name</span>
                        <Input />
                    </div>
                </form>
                {FORM_FIELDS.map((field) => {
                    const { old_title, new_title, btn_text } = field;
                    return (
                        <form key={new_title} className="section two">
                            <div>
                                <span>{old_title}</span>
                                <Input />
                            </div>
                            <div>
                                <span>{new_title}</span>
                                <Input />
                            </div>
                            <Button>{btn_text}</Button>
                        </form>
                    );
                })}
            </DashboardPageContainer>
        </Layout>
    );
};

export default DashboardPage;
