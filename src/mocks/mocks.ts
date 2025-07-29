import type { Testimonial, Blog } from '../types/types';
import profileImage from '../assets/profile-thumbnail.png';
import blogImage from '../assets/blog-placeholder.jpg';

export const testimonial: Testimonial = {
    name: 'Sarah Dole',
    handle: '@sarahdole',
    blurb: `I've been searching for high - quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!`,
    userImage: {
        file: profileImage,
        alt: `The image shows a young woman with long, wavy dark brown hair. She is smiling warmly and appears cheerful. She is wearing round, clear-framed glasses and a white top. Her teeth are slightly visible through her smile, and her eyes are slightly squinted in a joyful expression. The background is a white brick wall, giving the image a clean and bright feel. The photo is cropped in a circular shape.`
    }
} 

export const blog: Blog = {
    title: 'Top 5 Living Room Inspirations',
    tags: [
        'Interior'
    ],
    byline: 'Curated vibrants colors for your living, make it pop & calm in the same time.',
    blogImage: {
        file: blogImage,
        alt: "A cozy and stylish living room with a neutral color palette. A gray sofa with assorted throw pillows sits against a soft gray wall, above which hang three framed textured art pieces. Two woven pendant lights hang from the ceiling. A round white coffee table with wooden legs sits on a patterned area rug in soft pastel tones. The room features several green plants, a rattan ottoman, a side table with a lamp, and wooden accent furniture. Natural light streams in through a window with sheer white curtains, creating a warm and inviting atmosphere."
    }
} 