import styled from 'styled-components';
import { Outlet } from 'react-router';

const Main = styled.main`
  background: linear-gradient(148deg, #F9FAFB 8.89%, #D2D6DB 100.48%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
  align-content: center;
  justify-items: center;
  align-items: center;
  padding: 1.25rem;
`;


const Layout = () => {
  return (
    <Main>
        <Outlet />
    </Main>
  )
};

export default Layout;