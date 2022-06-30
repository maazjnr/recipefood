import { useEffect, useState } from "react";
import styled from 'styled-components';
import { Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

function Popular() {
  const [popular, setPopular] = useState([]);

  let myApi = "dc08124ff78a4ea9855372247525457d";

    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {
    const check = localStorage.getItem("popular");

      if (check) {
        setPopular(JSON.parse(check));
      } else {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${myApi}&number=9`
          );
          const data = await api.json();
          setPopular(data.recipes);
          localStorage.setItem("popular", JSON.stringify(data.recipes));
      }

    }

  return (
    <Container>

      <Row>
          <Wrapper>
            <h3>Popular Picks</h3>

            <Splide options={{
              perPage: 3, 
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "5rem"
            }}>
            {popular.map(recipe => {
              return(
                <SplideSlide key={recipe.id}>

                <Card>
                 <Col lg={4} sm={8} md={12} xs={12}>
                 <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                  </Link>
                 </Col>
                </Card>
                
                </SplideSlide>
              );
            })}
            </Splide>

          </Wrapper>
          </Row>

    </Container>
  )
}

const Wrapper = styled.div`
margin: 4rem 0rem;
`

const Card = styled.div`
height: 25rem;
overflow: hidden;
position: relative;

img {
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

}

p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items:center;
}
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))
`

export default Popular