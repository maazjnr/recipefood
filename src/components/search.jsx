import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


const Search = () => {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input)
    }

    return(
        <div>
            
            <FormStyle onSubmit={submitHandler}>
               <div>
                   <FaSearch></FaSearch>
               <input onChange={(e) => setInput(e.target.value)} 
               type='text' value={input} />
               </div>
            </FormStyle>

        </div>
    )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;

    div {
        width: 100%;
        position: relative;
    }

    input {
        border: none;
        background: black;
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`
export default Search