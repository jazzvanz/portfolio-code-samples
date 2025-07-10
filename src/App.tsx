import './App.css'
import styled from 'styled-components';
import { TestimonialCard } from './projects/index';

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
        <TestimonialCard />
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
