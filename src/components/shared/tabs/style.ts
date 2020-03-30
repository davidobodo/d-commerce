import styled from "styled-components";

export const TabsContainer = styled.div`
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

        .tab-description {
            h1 {
                margin-bottom: 20px;
            }
        }
    }
`;
