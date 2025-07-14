import './App.css'
import styled from 'styled-components';
import { TestimonialCard } from './projects/index';
import { testimonial } from './mocks/mocks';
import { devices } from './constants/constants.js';

const Gallery = styled.section`
  background-color: #fff;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;

  @media only screen and ${devices.lg} {
    grid-template-columns: repeat(3, 1fr);
    min-width: fit-content;
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
