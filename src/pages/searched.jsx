import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Searched = () => {

    const [searchedReceipes, setSearchedRecipes] = useState([]);
    let myApi = "dc08124ff78a4ea9855372247525457d";
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`
        https://api.spoonacular.com/recipes/complexSearch?apiKey=${myApi}&query=${name}`)
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
      };

      useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return <Grid>
        {searchedReceipes.map((item) => {
            return (
                <Card key={item.id}>
                  <Link to={"/recipe/" + item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`

const Card = styled.div`
img{
  width: 100%;
  border-radius: 2rem;
}

a{
  text-decoration: none;
}

h4{
  text-align: center;
  padding: 1rem
}
`

export default Searched