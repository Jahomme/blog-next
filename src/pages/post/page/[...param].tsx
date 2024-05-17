// import { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import HomePage from '../../../containers/HomePage';
import { getAllPosts } from '../../../data/posts/get-all-posts';
import { PostData } from '../../../domain/posts/post';
import { useRouter } from 'next/router';
import { PaginationData } from '@/domain/posts/pagination';
import { countAllPosts } from '@/data/posts/count-all-posts';

export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Carregando...</div>;
  if (!posts.length) return <div>Página não encontrada...</div>;

  return <HomePage posts={posts} category={category} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params = ctx.params as any;
  const page = Number(params.param[0] || 0);
  const category = params.param[1] || '';
  const postsPerPage = 3;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  const categoryQuery = category
    ? `&filters[category][name][$eq]=${formattedCategory}`
    : '';

  const urlQuery = `&sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}${categoryQuery}`;
  const posts = await getAllPosts(urlQuery);

  const numberOfPosts = Number((await countAllPosts(categoryQuery)).length);
  const pagination: PaginationData = {
    nextPage,
    numberOfPosts,
    postsPerPage,
    previousPage,
    category,
  };

  return {
    props: { posts, pagination, category },
    // revalidate: 5,
  };
};
