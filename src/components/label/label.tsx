import styled from 'styled-components';
import { tokens } from '../../constants/tokens';

const Pill = styled.span`
    display: block;
    width: auto;
    padding: 2px 8px;
    border-radius: 999px;
    border: 1px solid  ${tokens.colors.green.medium};
    background: ${tokens.colors.green.light};
    color: ${tokens.colors.green.dark};
`;

const Label = ({children}: { children: string }) => {
    return (
        <Pill>
            {children}
        </Pill>
    )
};

export default Label;
