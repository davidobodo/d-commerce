import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    background-color: #f2f2f2;
    color: #555;
    padding: 60px 20px 20px;

    .footer__details {
        text-align: center;

        &__section {
            margin-bottom: 60px;
        }
    }

    h2 {
        font-weight: 300;
        margin-bottom: 10px;
    }

    ul {
        list-style: none;

        li {
            margin-bottom: 5px;
            font-size: 14px;
        }
    }

    p {
        font-size: 14px;
        line-height: 20px;
    }

    .footer__copyright {
        font-size: 12px;
        text-align: center;
        opacity: 0.5;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <section className="footer__details">
                <div className="footer__details__section ">
                    <h2>d-commerce</h2>
                    <p>
                        Duis iaculis pretium fermentum. Duis at placerat lacus,
                        non luctus dui. Nunc vel enim eu eros congue laoreet.
                        Nunc mollis dui sed consequat cursus. Nam vel nulla mi.
                        Duis fringilla leo blandit augue cursus iaculis.
                    </p>
                </div>
                <div className="footer__details__section ">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>+234-810-554-6642</li>
                        <li>obododavid5@gmail.com</li>
                    </ul>
                </div>
                <div className="footer__details__section ">
                    <h2>Resources</h2>
                    <ul>
                        <li>Home</li>
                        <li>Cart</li>
                        <li>Contact Us</li>
                        <li>My Account</li>
                    </ul>
                </div>
            </section>
            <section className="footer__copyright">
                &copy; 2020 obodo david production
            </section>
        </FooterContainer>
    );
};

export default Footer;
