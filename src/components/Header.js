import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";

function Header() {
  return (
    <Nav>
        <Link to="/"><Logo src="img/logo.svg"/></Link>
        <NavMenu>
            <a>
                <img src="img/home-icon.svg"/>
                <span>HOME</span>
            </a>
            <a>
                <img src="img/search-icon.svg"/>
                <span>SEARCH</span>
            </a>
            <a>
                <img src="img/watchlist-icon.svg"/>
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src="img/original-icon.svg"/>
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src="img/movie-icon.svg"/>
                <span>MOVIE</span>
            </a>
        </NavMenu>
        <UserImg src="img/n.jpg"/>
    </Nav>
  )
}

export default Header

const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 30px;
    color: white;
    overflow-X: hidden;
`
const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                position: absolute;
                content: "";
                height: 2px;
                background: white;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`
