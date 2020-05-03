import styled from 'styled-components';
import { BackdropProps } from './IBackdrop';


export const BackdropContainer = styled.div<BackdropProps>`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: transform 0.25s ease-in-out;
    top: 0;
    left: 0;

    ${({ blackBackdrop }) => blackBackdrop && "background-color: rgba(0, 0, 0, 0.6)"};
    ${({ whiteBackdrop }) => whiteBackdrop && "background-color: rgba(255, 255, 255, 0.9)"};

    ${({ behaviour }) => behaviour == 'right2left' && 'transform: translateX(100vw);'};
    ${({ showBackdrop }) => showBackdrop && "transform: translateX(0)"};
`;