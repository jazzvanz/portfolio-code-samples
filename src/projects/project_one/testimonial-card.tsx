import React from 'react';
import styled from 'styled-components';

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

const TestimonialCard: React.FC = () => {
    return (
        <Card>
            <div>
                <UserImage />
                <div>
                    <Name>Sarah Dole</Name>
                    <Handle>@sarahdole</Handle>
                </div>
            </div>
            <Blurb>I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!</Blurb>
        </Card>
    )
};

export default TestimonialCard;

// TODO
// content - set up mock file
// setup type file
// setup theme file - look to design system 
// acheive layout
// responsive 
// check other broswers
// truncate utlity function 
// add test for truncating 
// run through instructions 
// host for review? 

// Look into [vite] server connection lost. Polling for restart...
// client:921 WebSocket connection to 'ws://localhost:5173/' failed: 