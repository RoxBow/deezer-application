import type { FC } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Box,
  Link,
} from '@chakra-ui/react';
import type { Track } from 'types/Track';
import LinkNext from 'next/link';

type TrackListProps = Readonly<{
  tracks: Track[];
  withAlbum?: boolean;
}>;

const TrackList: FC<TrackListProps> = ({ tracks, withAlbum = true }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>#</Th>
            {withAlbum && <Th aria-label="preview" />}
            <Th>Title</Th>
            <Th>Artist</Th>
            {withAlbum && <Th>Album</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {tracks.map((track, idx) => (
            <Tr key={track.id}>
              <Td>{idx + 1}</Td>
              {track.album && (
                <Td>
                  <Box width="50px" height="50px">
                    <LinkNext href={`/album/${track.album.id}`} passHref>
                      <Link>
                        <Image
                          boxSize="100%"
                          objectFit="cover"
                          src={track.album.cover_medium}
                          alt={`Album ${track.album.title} preview`}
                        />
                      </Link>
                    </LinkNext>
                  </Box>
                </Td>
              )}
              <Td>{track.title}</Td>
              <Td>
                <LinkNext href={`/artist/${track.artist.id}`} passHref>
                  <Link>{track.artist.name}</Link>
                </LinkNext>
              </Td>
              {track.album && (
                <Td>
                  <LinkNext href={`/album/${track.album.id}`} passHref>
                    <Link>{track.album.title}</Link>
                  </LinkNext>
                </Td>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TrackList;
