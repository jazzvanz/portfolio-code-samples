import {
  type RouteConfig,
  route,
  index,
} from "@react-router/dev/routes";

export default [
  index("./main.tsx"),
  route("testimonialcard", "./projects/project_one/testimonial-card.tsx"),
  route("blogcard", "./projects/project_two/blog-card.tsx"),
] satisfies RouteConfig;
