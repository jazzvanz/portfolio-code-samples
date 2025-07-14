import styled from 'styled-components';
import { type Testimonial } from '../../types/types';
export interface TestimonialProps {
  testimonial: Testimonial;
}

const Card = styled.div`
  margin-top: 0;
  text-align: center;
`;

const Name = styled.h3`
  margin-top: 0;
  text-align: center;
`;

const Handle = styled.h4`
  margin-top: 0;
  text-align: center;
`;

const Blurb = styled.p`
  margin-top: 0;
  text-align: center;
`;

const Image = styled.img`
      margin-top: 0;
      text-align: center;
`;

const TestimonialCard = ({ testimonial }: TestimonialProps) => {
    const { name, handle, blurb, userImage } = testimonial;
    console.log('TestimonialCard props:', { name, handle, blurb, userImageFile: userImage.file })
    return (
        <Card>
            <div>
                <Image src={userImage.file} alt={userImage.alt} />
                <div>
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
// acheive layout
// setup theme file - look to design system 
// responsive 
// check other broswers
// truncate utlity function 
// add test for truncating 
// run through instructions 
// host for review? 

// Look into [vite] server connection lost. Polling for restart...
// client:921 WebSocket connection to 'ws://localhost:5173/' failed: 