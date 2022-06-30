import { useState, useEffect } from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";

const Recipe = () => {

    let myApi = "dc08124ff78a4ea9855372247525457d";

    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState("instruction");
    let params = useParams();

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${myApi}`
        )
        const detailData = await data.json();
        setDetails(detailData)

    }

    useEffect(() => {
        fetchDetails();
    },[params.name]);

    return(
        <DetailsWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>

            <Info>

                <Button className={activeTab === "instruction" ? "active" : ""} 
                onClick={() => setActiveTab("instruction")}>
                    Instruction
                </Button>

                <Button className={activeTab === "ingredient" ? "active" : ""} 
                onClick={() => setActiveTab("ingredient")}>
                    Ingredient
                </Button>

                {activeTab === "instruction" && (
                            <div>
                            <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                            <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
                        </div>
                )}

                {activeTab === "ingredient" && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>

                )}
            </Info>
        </DetailsWrapper>
    )
}

const DetailsWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    .active{
        background: black;
        color: white;
    }
    
    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }

    ul{
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131
    border: 2px solid black;
    font-weight: 600;
    margin-right: 2rem;
    
`

const   Info = styled.div`
    margin-bottom: 2rem;
    margin-left: 6rem;
`

export default Recipe