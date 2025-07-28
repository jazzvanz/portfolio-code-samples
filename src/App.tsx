import './App.css'
import { Routes, Route } from 'react-router';
import Layout from './routes/layout.tsx'
import { TestimonialCard, BlogCard } from './projects/index';
import { testimonial } from './mocks/mocks';
import ComponentsPage from './pages/components-page.tsx';

function App() {

  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/portfolio-code-samples/components" element={<ComponentsPage />} />
          <Route path="/portfolio-code-samples/components/testimonial-card" element={<TestimonialCard testimonial={testimonial} />} />
          {/* <Route path="blog-card" element={<BlogCard blog={} />} /> */}
        </Route>
      </Routes>
    </main>
  )
}

export default App
