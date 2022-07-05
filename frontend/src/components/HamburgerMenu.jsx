import React, { useState } from 'react';
import styled from 'styled-components';

const MenuLabel = styled.label`
    background-color: transparent;
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    height: 4rem;
    width: 4rem;
    cursor: pointer;
    z-index: 1000;
    text-align: center;
    @media only screen and (min-width: 768px) {
        display: none;
    }
`;

const Icon = styled.span`
    position: relative;
    background-color: black;
    width: 1rem;
    height: 3px;
    display: inline-block;
    margin-top: 1.2rem;
    transition: all 0.3s;
    &::before,
    &::after {
        content: '';
        background-color: black;
        width: 1rem;
        height: 3px;
        display: inline-block;
        position: absolute;
        left: 0;
        transition: all 0.3s;
    }
    &::before {
        top: -0.4rem;
    }
    &::after {
        top: 0.4rem;
    }
`;

export default function HamburgerMenu() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
                <Icon clicked={click}>&nbsp;</Icon>
            </MenuLabel>
        </>
    );
}
