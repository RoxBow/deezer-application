import type { FC } from 'react';
import { Flex, Box, Image } from '@chakra-ui/react';
import type { BaseAlbum } from 'types/Album';

type AlbumItemProps = Readonly<{
  album: BaseAlbum;
}>;

const AlbumItem: FC<AlbumItemProps> = ({ album }) => {
  const releaseYear = album.release_date
    ? album.release_date.split('-')[0]
    : null;

  return (
    <Flex
      direction="column"
      key={album.id}
      mr={6}
      flexShrink={0}
      maxWidth="200px"
    >
      <Image
        boxSize="100%"
        objectFit="cover"
        src={album.cover_big}
        mb={3}
        alt=""
      />
      <Box as="p">{album.title}</Box>
      {releaseYear && <Box as="p">{releaseYear}</Box>}
    </Flex>
  );
};

export default AlbumItem;
