import { Date } from '../Date';
import Link from 'next/link';
import { Container } from './styled';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ author, category, date }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} |{' '}
      <Link
        legacyBehavior
        as={`/post/page/1/${category.toLowerCase()}`}
        href="/post/page/[...param]"
      >
        <a>{category}</a>
      </Link>
    </Container>
  );
};
