import useSwr from 'swr';
import { useRouter } from 'next/router';
import { Flex, Image, Heading } from '@chakra-ui/react';
import TrackList from '@components/TrackList/TrackList';
import type { Artist } from 'types/Artist';
import AlbumList from '@components/AlbumList/AlbumList';

const ArtistPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: dataArtist, error: errorArtist } = useSwr(`/api/artist/${id}`);
  const { data: dataTop, error: errorTop } = useSwr(`/api/artist/${id}/top`);
  const { data: dataAlbums, error: errorAlbums } = useSwr(
    `/api/artist/${id}/albums`
  );

  const isLoadingArtist = !dataArtist && !errorArtist;
  const isLoadingTop = !dataTop && !errorTop;
  const isLoadingAlbums = !dataAlbums && !errorAlbums;

  if (isLoadingArtist || isLoadingTop || isLoadingAlbums) {
    return <Spinner size="lg" />;
  }

  const { name, picture_big } = dataArtist as Artist;

  return (
    <Flex as="main" direction="column" p={10}>
      <Flex direction="row" align="center" mb={6}>
        <Image
          borderRadius="full"
          boxSize="220px"
          src={picture_big}
          alt={name}
          mr={6}
        />
        <Heading as="h1" size="3xl" noOfLines={1}>
          {name}
        </Heading>
      </Flex>

      <Flex direction="column" mb={6}>
        <Heading as="h2" size="lg" noOfLines={1} mb={4}>
          Top tracks
        </Heading>
        <TrackList tracks={dataTop.tops} />
      </Flex>

      <Flex direction="column">
        <Heading as="h2" size="lg" noOfLines={1} mb={4}>
          Albums
        </Heading>
        <AlbumList albums={dataAlbums.albums} />
      </Flex>
    </Flex>
  );
};

export default ArtistPage;
