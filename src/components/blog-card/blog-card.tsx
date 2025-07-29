import styled from 'styled-components';
import { type Blog } from '../../types/types';
import { Card, Button, Label } from '../index';
import { tokens } from '../../constants/tokens';
export interface BlogProps {
  blog: Blog;
}

const Textblock = styled.div`
    display: block;
    padding: ${tokens.spacing.large} ${tokens.spacing.medium};
`;

const BlogCard = ({ blog }: BlogProps) => {
    const { title, tags, byline, blogImage } = blog;

    return (
        <Card>
          <img src={blogImage.file} alt={blogImage.alt} loading="lazy"  style={{ display: 'block', width: '100%', maxHeight: '288px' }}/>
      
          <Textblock>
            <div style={{ display: 'flex', gridGap: '5px'}}>
              {tags.length > 0 && 
                tags.map((tag) => {
                  return <Label key={tag.toLowerCase()}>{tag}</Label>
                })
              }
            </div>
            <h4>{title}</h4>
            <p>{byline}</p>
            <Button />
          </Textblock>
        </Card>
    )
};

export default BlogCard;