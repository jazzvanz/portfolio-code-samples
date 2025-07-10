import React from 'react';
import styled from 'styled-components';
import testimonial from '../types/types';

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

const UserImage = styled.img`
      margin-top: 0;
      text-align: center;
`;

const TestimonialCard: React.FC = ({ name, handle, testimonial, UserImage }: testimonial) => {
    return (
        <Card>
            <div>
                <UserImage />
                <div>
                    <Name>{name}</Name>
                    <Handle>{handle}</Handle>
                </div>
            </div>
            <Blurb>{testimonial}</Blurb>
        </Card>
    )
};

export default TestimonialCard;

// TODO
// style testimonial card
// add user image
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