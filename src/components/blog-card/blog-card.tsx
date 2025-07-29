import styled from 'styled-components';
import { type Blog } from '../../types/types';

export interface BlogProps {
  blog: Blog;
}

const Card = styled.div`
    background-color: #FFFFFF;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10);
    max-width: 21.25rem;
    width: 100%;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
`;

const BlogCard = ({ blog }: BlogProps) => {
    // const { name, handle, blurb, userImage } = testimonial;

    return (
        <Card>
          <div style={{ display: 'flex', paddingBottom: '1rem'}}>
              <Image src={userImage.file} alt={userImage.alt} loading="lazy" />
              <div style={{ paddingLeft: '1rem'}}>
                  <Name>{name}</Name>
                  <Handle>{handle}</Handle>
              </div>
          </div>
          <Blurb>{truncateText(blurb, 250)}</Blurb>
        </Card>
    )
};

export default BlogCard;