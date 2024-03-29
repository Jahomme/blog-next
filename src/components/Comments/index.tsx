import { DiscussionEmbed } from 'disqus-react';
import { Container } from './styled';

export type CommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname="blog-next-8"
        config={{
          url: `/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
};
