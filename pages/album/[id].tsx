import useSwr from 'swr';
import { useRouter } from 'next/router';
import {
  Spinner,
  Flex,
  Image,
  Heading,
  Link,
  ListItem,
  Box,
} from '@chakra-ui/react';
import LinkNext from 'next/link';

import TrackList from '@components/TrackList/TrackList';
import type { Album } from 'types/Album';
import { formatTimeInMinute } from '@utils/formatTime';
import { formatBigNumber } from '@utils/formatNumber';

const ArtistPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSwr(`/api/album/${id}`);

  const isLoading = !data && !error;

  if (isLoading) return <Spinner size="lg" />;

  const {
    cover_big,
    title,
    tracks,
    artist,
    release_date,
    nb_tracks,
    fans,
    duration,
  } = data as Album;

  return (
    <Flex direction="column" p={10}>
      <Flex direction="row" align="center" mb={6}>
        <Image boxSize="220px" src={cover_big} alt={title} mr={6} />

        <Flex direction="column">
          <Heading as="h1" size="3xl" noOfLines={1} mb={2}>
            {title}
          </Heading>

          <Flex direction="row" mb={2}>
            <Image
              borderRadius="full"
              boxSize="30px"
              src={artist.picture_small}
              alt=""
              mr={2}
            />
            <LinkNext href={`/artist/${artist.id}`} passHref>
              <Link>{artist.name}</Link>
            </LinkNext>
          </Flex>

          <Flex direction="row">
            <Box as="p" mr={2}>
              {nb_tracks} tracks
            </Box>
            <Box as="p" mr={2}>
              {formatTimeInMinute(duration)}min
            </Box>
            <Box as="p">{formatBigNumber(fans)} fans</Box>
          </Flex>
        </Flex>
      </Flex>

      <TrackList tracks={tracks.data} withAlbum={false} />
    </Flex>
  );
};

export default ArtistPage;
