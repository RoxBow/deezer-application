import type { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import type { Album } from 'types/Album';
import AlbumItem from '@components/AlbumList/AlbumItem';

type AlbumListProps = Readonly<{
  albums: Album[];
}>;

const AlbumList: FC<AlbumListProps> = ({ albums }) => {
  return (
    <Flex direction="row" overflowX="scroll" align="flex-start">
      {albums.map((album) => (
        <AlbumItem album={album} key={album.id} />
      ))}
    </Flex>
  );
};

export default AlbumList;
