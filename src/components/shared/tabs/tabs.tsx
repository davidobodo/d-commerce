import React, { useState } from "react";
import { TabsContainer } from "./style";

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
        setChosen(currentTab);
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
                        <li id="tab-1" className={active1 ? "active" : ""}>
                            Description
                        </li>
                        <li id="tab-2" className={active2 ? "active" : ""}>
                            Additional Information
                        </li>
                        <li id="tab-3" className={active3 ? "active" : ""}>
                            Reviews (0)
                        </li>
                        <hr />
                    </ul>
                </nav>
                {displayTabOne && (
                    <div className="tab-description">
                        <h1>Description</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quas, iure corrupti facere repudiandae
                            architecto eligendi nobis minima illo amet! Ad vitae
                            placeat non odit? Quod cumque officia minima?
                            Pariatur, minus! Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit. Quas, iure corrupti
                            facere repudiandae architecto eligendi nobis minima
                            illo amet! Ad vitae placeat non odit? Quod cumque
                            officia minima? Pariatur, minus! Lorem ipsum dolor
                            sit, amet consectetur adipisicing elit. Quas, iure
                            corrupti facere repudiandae architecto eligendi
                            nobis minima illo amet! Ad vitae placeat non odit?
                            Quod cumque officia minima? Pariatur, minus!
                        </p>
                    </div>
                )}
                {displayTabTwo && (
                    <div className="tab-info">
                        <h1>Additional Information</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Weight</td>
                                    <td>2lbs</td>
                                </tr>
                                <tr>
                                    <td>Brand</td>
                                    <td>A Good One</td>
                                </tr>
                                <tr>
                                    <td>Color</td>
                                    <td>Blue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                {displayTabThree && <div>tab three</div>}
            </div>
        </TabsContainer>
    );
};

export default Tabs;
