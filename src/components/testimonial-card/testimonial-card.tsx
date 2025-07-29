import styled from 'styled-components';
import { type Testimonial } from '../../types/types';
import { truncateText } from '../../utlity/truncate';
import { tokens } from '../../constants/tokens';
import { Card } from '../index';

export interface TestimonialProps {
  testimonial: Testimonial;
}

const Name = styled.h3`
  margin: 0;
  ${tokens.typography.large}
  font-weight: 600;
`;

const Handle = styled.h4`
  margin: 0;
  font-size: 0.875rem; 
  font-weight: 400;
  color: ${tokens.colors.grey.dark};
`;

const Blurb = styled.p`
  margin: 0;
  font-family: "Noto Sans";
  ${tokens.typography.base}
  color: ${tokens.colors.grey.dark};
`;

const Image = styled.img`
  display: block;
  width: 3rem;
  height: 3rem;
`;

const TestimonialCard = ({ testimonial }: TestimonialProps) => {
    const { name, handle, blurb, userImage } = testimonial;

    return (
        <Card>
          <div style={{ padding: tokens.spacing.large }}>
            <div style={{ display: 'flex', paddingBottom: '1rem'}}>
                <Image src={userImage.file} alt={userImage.alt} loading="lazy" />
                <div style={{ paddingLeft: '1rem'}}>
                    <Name>{name}</Name>
                    <Handle>{handle}</Handle>
                </div>
            </div>
            <Blurb>{truncateText(blurb, 250)}</Blurb>
          </div>
        </Card>
    )
};

export default TestimonialCard;
