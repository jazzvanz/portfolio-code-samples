import './App.css'
import styled from 'styled-components';
import { TestimonialCard } from './projects/index';
import { testimonial } from './mocks/mocks';
import { devices } from './constants/constants.js';

const Gallery = styled.section`
  background: linear-gradient(148deg, #F9FAFB 8.89%, #D2D6DB 100.48%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
  justify-items: center;
  align-items: center;
  padding: 1.25rem;

  @media only screen and ${devices.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

function App() {

  return (
    <Gallery>
      <TestimonialCard testimonial={testimonial} />
      <TestimonialCard testimonial={testimonial} />
      <TestimonialCard testimonial={testimonial} />
    </Gallery>
  )
}

export default App
