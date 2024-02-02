import { GetServerSideProps } from 'next';
import HomePage from '../../containers/HomePage';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { PostData } from '../../domain/posts/post';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return <HomePage category={category} posts={posts} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Esse trecho de código a seguir irá funcionar apenas para arrays com um elemento apenas pois, ele irá pegar o primeiro elemento dele.
  const category = Array.isArray(ctx.query.category)
    ? ctx.query.category[0]
    : ctx.query.category;

  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  const urlQuery = `&sort=id:desc&pagination[start]=0&pagination[limit]=10&filters[category][name][$eq]=${formattedCategory}`;
  const posts = await getAllPosts(urlQuery);

  return {
    props: { posts, category: ctx.query.category },
  };
};
