import React from 'react'
import styled from "styled-components"

function Header() {
  return (
    <Nav>
        <Logo src="img/logo.svg"/>
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
        }
    }
`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`
