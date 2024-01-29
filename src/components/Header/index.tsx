import Link from 'next/link';
import { SITE_NAME } from '../../config/app-config';
import { Container } from './styled';

export const Header = () => {
  return (
    <Container>
      <Link legacyBehavior href="/">
        <a>{SITE_NAME}</a>
      </Link>
    </Container>
  );
};
