import React from "react";
import Layout from "../../shared/layout/layout";

import { DashboardPageContainer } from "./style";

const DashboardPage = () => (
    <Layout isFooterPresent={true}>
        <DashboardPageContainer>
            <div className="header">
                <h1>Dashboard</h1>
            </div>
        </DashboardPageContainer>
    </Layout>
);

export default DashboardPage;
