import { FC, useRef, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Spinner,
  Box,
} from '@chakra-ui/react';
import type { Track } from 'types/Track';
import TrackItem from '@components/TrackList/TrackItem';
import InfiniteScroll from 'react-infinite-scroller';

type TrackListProps = Readonly<{
  tracks: Track[];
  withAlbum?: boolean;
  loadMore?: () => void;
  hasMore?: boolean;
}>;

const TrackList: FC<TrackListProps> = ({
  tracks,
  withAlbum = true,
  loadMore,
  hasMore,
}) => {
  const [lineHover, setLineHover] = useState<number | null>(null);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  return (
    <TableContainer ref={tableContainerRef}>
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

        <InfiniteScroll
          element={Tbody}
          initialLoad={false}
          pageStart={0}
          loadMore={() => {
            if (loadMore) loadMore();
          }}
          getScrollParent={() => tableContainerRef.current}
          hasMore={hasMore}
          useWindow={false}
          loader={
            <Box as="tr" key="loader">
              <Box as="td" colSpan={5} textAlign="center" p={3}>
                <Spinner />
              </Box>
            </Box>
          }
        >
          {tracks.map((track, idx) => (
            <TrackItem
              key={track.id}
              track={track}
              setHover={setLineHover}
              isHover={lineHover === track.id}
              index={idx + 1}
            />
          ))}
        </InfiniteScroll>
      </Table>
    </TableContainer>
  );
};

export default TrackList;
