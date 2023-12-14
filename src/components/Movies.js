import React, {useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom";

function Movies() {
  
  const [movieList, setMovieList] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);

  const getMovie = async () => {
    await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=8b3c8eb7ab57e1f1b000d4886802f6b3")
    .then((res) => {
      console.log(res.data.results)
      setMovieList(res.data.results)
      setIsLoaded(true);
    })
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <div>
    <h1 style={{fontSize: '16px', color: 'gray', padding: '2rem 0'}}>Recommended for You</h1>
    <Container>
      {movieList.map((movie) => {
      return(
          <Wrap>
              <Link to="./detail"><Img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></Link>
          </Wrap>
       );
      })}
    </Container>
    </div>
  )
}

export default Movies

const Container = styled.div`
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    margin-bottom: 5rem;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 /73%) 0px 16px 10px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }

`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
