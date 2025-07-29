import styled from 'styled-components';
import { tokens } from '../../constants/tokens';

export interface cardProps {
  children: React.ReactNode;
}

const CardWrapper = styled.div`
    background-color: ${tokens.colors.white};
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10);
    max-width: 21.25rem;
    width: 100%;
`;

const Card = ({ children }: cardProps) => {

    return (
        <CardWrapper>
            {children}
        </CardWrapper>
    )
};

export default Card;
