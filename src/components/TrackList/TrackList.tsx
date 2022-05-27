import { FC, useRef, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react';
import type { Track } from 'types/Track';
import TrackItem from '@components/TrackList/TrackItem';

type TrackListProps = Readonly<{
  tracks: Track[];
  withAlbum?: boolean;
}>;

const TrackList: FC<TrackListProps> = ({ tracks, withAlbum = true }) => {
  const [lineHover, setLineHover] = useState<number | null>(null);

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
            <TrackItem
              key={track.id}
              track={track}
              setHover={setLineHover}
              isHover={lineHover === track.id}
              index={idx + 1}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TrackList;
