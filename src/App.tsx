import './App.css'
import styled from 'styled-components';
import { TestimonialCard } from './projects/index';
import { testimonial } from './mocks/mocks';

const Gallery = styled.section`
  background-color: #00100B;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const GalleryItem = styled.div`
  background-color: #14BDEB;
`;

function App() {

  return (
    <Gallery>
      <GalleryItem>
        <TestimonialCard testimonial={testimonial} />
      </GalleryItem>
      <GalleryItem>
        Second Item
      </GalleryItem>
      <GalleryItem>
        Third Item..
      </GalleryItem>
    </Gallery>
  )
}

export default App
