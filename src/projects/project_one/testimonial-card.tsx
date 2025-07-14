import styled from 'styled-components';
import { type Testimonial } from '../../types/types';
export interface TestimonialProps {
  testimonial: Testimonial;
}

const Card = styled.div`
    background-color: #FFFFFF;
    border-radius: 0.5rem;
    padding: 2.5rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0 0.25rem 1rem 0;
    width: 100%;
`;

const Name = styled.h3`
  margin: 0;
`;

const Handle = styled.h4`
  margin: 0;
`;

const Blurb = styled.p`
  margin: 0;
`;

const Image = styled.img`
  display: block;
  width: 3rem;
  height: 3rem;
`;

const TestimonialCard = ({ testimonial }: TestimonialProps) => {
    const { name, handle, blurb, userImage } = testimonial;
    console.log('TestimonialCard props:', { name, handle, blurb, userImageFile: userImage.file })
    return (
        <Card>
          <div style={{ display: 'flex', paddingBottom: '16px'}}>
              <Image src={userImage.file} alt={userImage.alt} />
              <div style={{ paddingLeft: '16px'}}>
                  <Name>{name}</Name>
                  <Handle>{handle}</Handle>
              </div>
          </div>
          <Blurb>{blurb}</Blurb>
        </Card>
    )
};

export default TestimonialCard;

// TODO
// style testimonial card
// setup theme file - look to design system 
// responsive 
// check other broswers
// add test for truncating 
// error boundary for testimonial card or app
// run through instructions 
// host for review? 

// Look into [vite] server connection lost. Polling for restart...
// client:921 WebSocket connection to 'ws://localhost:5173/' failed: 