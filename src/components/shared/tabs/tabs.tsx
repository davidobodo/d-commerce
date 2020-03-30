import React, { useState } from "react";
import { TabsContainer } from "./style";

const Tabs = () => {
    const [displayTabOne, setDisplayTabOne] = useState(false);
    const [displayTabTwo, setDisplayTabTwo] = useState(false);
    const [displayTabThree, setDisplayTabThree] = useState(true);

    const [chosen, setChosen] = useState("tab-3");
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
                {displayTabThree && (
                    <div className="tab-reviews">
                        <h1>Reviews</h1>
                        <p>There are no Reviews yet.</p>
                        <p>
                            Be the first to review <span>"Coffee T-shirt"</span>{" "}
                            <br />
                            Youe email address will not be published. Required
                            fields are marked
                        </p>
                        <div className="stars">
                            <h6>Your rating</h6>
                            <div>stars</div>
                        </div>
                        <form action="">
                            <div className="field-textarea">
                                <label htmlFor="">
                                    <h6>Your review</h6>
                                </label>
                                <textarea name="" id=""></textarea>
                            </div>
                            <div className="field-input">
                                <label htmlFor="">
                                    <h6>Name</h6>
                                </label>
                                <input type="text" />
                            </div>
                            <div className="field-input">
                                <label htmlFor="">
                                    <h6>Email</h6>
                                </label>
                                <input type="text" />
                            </div>
                            <div className="field-checkbox">
                                <input type="checkbox" />
                                <h6>
                                    Save my name, email, and website in this
                                    browser for the next time I comment.
                                </h6>
                            </div>
                            <button className="btn-submit">Submit</button>
                        </form>
                    </div>
                )}
            </div>
        </TabsContainer>
    );
};

export default Tabs;
