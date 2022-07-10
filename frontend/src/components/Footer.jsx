import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants/colors';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <Foot>
                <div className="col">
                    <h3>Microsites</h3>
                    <a href="#" className="footer-links">
                        Senior Survey
                    </a>
                    <a href="#" className="footer-links">
                        Summer Blog
                    </a>
                    <a href="#" className="footer-links">
                        GS Meter
                    </a>
                </div>
                <div className="col">
                    <a href="#" className="footer-links">
                        Podcast
                    </a>
                </div>
                <div className="col">
                    <a href="">
                        <button className="btn">Subscribe</button>
                    </a>
                </div>
                <div className="col">
                    <a href="">
                        <button className="btn">Tipline</button>
                    </a>
                    <p>Would you like to report something?</p>
                    <a href="">
                        <button className="btn">IDF</button>
                    </a>
                </div>
            </Foot>
        </>
    );
}
const Foot = styled.div`
    font-family: 'Inknut Antiqua', sans-serif;
    width: 100%;
    height: clamp(100px, 200px, none);
    padding: 3rem 7rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
    background-color: ${colors.yellow};

    .footer-links {
        text-decoration: none;
        color: black;
    }

    .col {
        /* background-color: red; */
        height: 100px;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
    }

    .btn {
        color: white;
        background-color: black;
        border: none;
        text-transform: uppercase;
    }

    @media only screen and (max-width: 768px) {
    }
`;
