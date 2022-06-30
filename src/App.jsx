import Pages from "./pages/pages";
import Categories from "./components/categories";
import { BrowserRouter } from 'react-router-dom';
import Search from "./components/search";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {GiKnifeFork} from 'react-icons/gi';


const App = () => {

  return(
    <main>
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>Delicious</Logo> 
      </Nav>
      <Search />
      <Categories />
      <Pages />
      </BrowserRouter>
    </main>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
`

const Nav = styled.div`
padding: 4rem 0rem;
justify-content: flex-start;
align-item: center;

svg {
  font-size: 2rem;
}
`

export default App