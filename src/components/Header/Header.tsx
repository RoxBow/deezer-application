import type { FC } from 'react';
import { Flex, Link } from '@chakra-ui/react';
import Logo from '@components/Logo/Logo';
import LinkNext from 'next/link';

const Header: FC = () => {
  return (
    <Flex
      direction="column"
      align="center"
      p={8}
      borderBottom="1px"
      borderColor="gray.200"
    >
      <LinkNext href="/" passHref>
        <Link width="400px">
          <Logo />
        </Link>
      </LinkNext>
    </Flex>
  );
};

export default Header;
