import { Container } from './styled';
import ReactMarkdown from 'react-markdown';

export type PostContainerProps = {
  content: string;
};

export const PostContainer = ({ content }: PostContainerProps) => {
  return (
    <Container>
      <ReactMarkdown>{content}</ReactMarkdown>;
    </Container>
  );
};
