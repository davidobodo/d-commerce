import styled from 'styled-components';


export const ContactContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;

    .contact__header{
        margin-bottom: 60px;

        @media(max-width: 765px){
            font-size: 40px;
        }
    }

    .contact__subheader{
        font-size: 36px;
        margin-bottom: 30px;
        font-weight: 300;

        @media(max-width: 765px){
            font-size: 16px;
            line-height: 30px;
        }
    }

    .contact__links-wrapper{
        list-style: none;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        @media(max-width: 765px){
            display: block;
        }

        li{
            @media(max-width: 765px){
                margin-bottom: 30px;
            }

            i{
                font-size: 40px;
                margin-right: 40px;

                @media(max-width: 765px){
                    font-size: 16px;
                    margin-right: 20px;
                }
            }

            a{
                text-decoration: none;
                font-size: 34px;
                font-weight: 300;
                color: #000000;
                position: relative;
                cursor: pointer;

                @media(max-width: 765px){
                    font-size: 16px;
                }

                &:after{
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background-color: #074BF8;
                    bottom: 0;
                    left: 0;
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: all 0.25s ease-in-out;
                }
    
                
            }

            &:hover{

                i{
                    color: #074BF8;  
                }

                a{
                    color: #074BF8;

                    &:after{
                        transform-origin: right;
                        transform: scaleX(1);
                    }
                }
            }
        }
    }
`