import './App.css'
import { Routes, Route } from 'react-router';
import Layout from './routes/layout.tsx'
import { TestimonialCard, BlogCard } from './components/index';
import { testimonial, blog } from './mocks/mocks';
import ComponentsPage from './pages/components-page.tsx';

function App() {

  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/portfolio-code-samples/components" element={<ComponentsPage />} />
          <Route path="/portfolio-code-samples/components/testimonial-card" element={<TestimonialCard testimonial={testimonial} />} />
          <Route path="/portfolio-code-samples/components/blog-card" element={<BlogCard blog={blog} />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
