import { Footer } from '../../components/Footer';
import { Heading } from '../../components/Heading';
import { PostCover } from '../../components/PostCover';
import { PostDetails } from '../../components/PostDetails';
import { PostContainer } from '../../components/PostContainer';
import { Header } from '../../components/Header';
import { Comments } from '../../components/Comments';
import { MainContainer } from '../../components/MainContainer';
import { PostData } from '../../domain/posts/post';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          coverUrl={post.attributes.cover.data.attributes.formats.large.url}
          alt={post.attributes.title}
        />
        <PostDetails
          author={post.attributes.author.data.attributes.name}
          category={post.attributes.category.data.attributes.name}
          date={post.attributes.createdAt}
        />
        <PostContainer content={post.attributes.content} />
        <Comments title={post.attributes.title} slug={post.attributes.slug} />
      </MainContainer>

      <Footer />
    </>
  );
};
