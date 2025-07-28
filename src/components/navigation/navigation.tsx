import { Link } from "react-router";

const Navigation = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/home">Homepage</Link>
                    <ul>
                        <li>
                            <Link to="/components">Components</Link>
                            <ul>
                                <li>
                                    <Link to="/portfolio-code-samples/components/testimonial-card">Testimonial Card</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio-code-samples/components/blog-card">Blog Card</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;
