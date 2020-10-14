import { css, keyframes } from '@emotion/core';

export const flexWrap = css`
    display: flex;
    flex-wrap: wrap;
`;

export const flexColumn = css`
    display: flex;
    flex-direction: column;
`;

export const pillCss = css`
    display: inline-block;
    margin: 5px;
    padding: 5px 10px;
    min-width: 50px;
    text-align: center;
    border-radius: 20px;
    user-select: none;
`;

export const fadeIn = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`;

export const absolutePos = css`
    display: flex;
    position: absolute;
`;
