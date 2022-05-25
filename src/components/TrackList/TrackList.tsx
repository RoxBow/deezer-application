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
} from '@chakra-ui/react';
import type { Track } from 'types/Track';

type TrackListProps = Readonly<{
  tracks: Track[];
}>;

const TrackList: FC<TrackListProps> = ({ tracks }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th aria-label="preview" />
            <Th>Title</Th>
            <Th>Artist</Th>
            <Th>Album</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tracks.map((track, idx) => (
            <Tr key={track.id}>
              <Td>{idx + 1}</Td>
              <Td>
                <Box width="50px" height="50px">
                  <Image
                    boxSize="100%"
                    objectFit="cover"
                    src={track.album.cover_medium}
                    alt={`Album ${track.album.title} preview`}
                  />
                </Box>
              </Td>
              <Td>{track.title}</Td>
              <Td>{track.artist.name}</Td>
              <Td>{track.album.title}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TrackList;