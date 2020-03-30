import React, { useState } from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
    .wrapper {
        .tab__nav {
            &__links {
                list-style: none;
                display: flex;
                padding-left: 10px;
                margin-bottom: 40px;
                position: relative;

                li {
                    font-size: 14px;
                    font-weight: 700;
                    border: 1px solid ${props => props.theme.primaryColor};
                    border-right: none;
                    border-bottom: none;
                    padding: 10px;
                    background-color: #f2f2f2;
                    cursor: pointer;

                    &:last-of-type {
                        border-right: 1px solid
                            ${props => props.theme.primaryColor};
                    }
                }

                .active {
                    background-color: #ffffff;
                    position: relative;
                    z-index: 2;
                }

                hr {
                    width: 100%;
                    height: 1px;
                    position: absolute;
                    bottom: 0;
                    left: 0px;
                    background-color: ${props => props.theme.primaryColor};
                    border: none;
                }
            }
        }
    }
`;

const Tabs = () => {
    const [displayTabOne, setDisplayTabOne] = useState(true);
    const [displayTabTwo, setDisplayTabTwo] = useState(false);
    const [displayTabThree, setDisplayTabThree] = useState(false);

    const [chosen, setChosen] = useState();
    let active1 = "tab-1" === chosen;
    let active2 = "tab-2" === chosen;
    let active3 = "tab-3" === chosen;

    const handleSelectedTab = e => {
        const currentTab = e.target.id;
        if (currentTab === "tab-1") {
            setDisplayTabTwo(false);
            setDisplayTabThree(false);
            setDisplayTabOne(true);
        } else if (currentTab === "tab-2") {
            setDisplayTabThree(false);
            setDisplayTabOne(false);
            setDisplayTabTwo(true);
        } else if (currentTab === "tab-3") {
            setDisplayTabOne(false);
            setDisplayTabTwo(false);
            setDisplayTabThree(true);
        }
    };

    return (
        <TabsContainer>
            <div className="wrapper">
                <nav className="tab__nav">
                    <ul className="tab__nav__links" onClick={handleSelectedTab}>
                        <li
                            id="tab-1"
                            onClick={() => setChosen("tab-1")}
                            className={active1 ? "active" : ""}
                        >
                            Description
                        </li>
                        <li
                            id="tab-2"
                            onClick={() => setChosen("tab-2")}
                            className={active2 ? "active" : ""}
                        >
                            Additional Information
                        </li>
                        <li
                            id="tab-3"
                            onClick={() => setChosen("tab-3")}
                            className={active3 ? "active" : ""}
                        >
                            Reviews (0)
                        </li>
                        <hr />
                    </ul>
                </nav>
                {displayTabOne && <div>tab one</div>}
                {displayTabTwo && <div>tab two</div>}
                {displayTabThree && <div>tab three</div>}
            </div>
        </TabsContainer>
    );
};

export default Tabs;
