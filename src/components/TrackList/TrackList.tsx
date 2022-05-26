import { FC, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  Box,
  Link,
  Image,
} from '@chakra-ui/react';
import type { Track } from 'types/Track';
import LinkNext from 'next/link';
import { FaPlay } from 'react-icons/fa';
import { useApp } from '@components/AppProvider/App.context';

type TrackListProps = Readonly<{
  tracks: Track[];
  withAlbum?: boolean;
}>;

const TrackList: FC<TrackListProps> = ({ tracks, withAlbum = true }) => {
  const [lineHover, setLineHover] = useState<number | null>(null);
  const { setAudioPlay } = useApp();

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
            <Tr
              key={track.id}
              onMouseOver={() => setLineHover(track.id)}
              onMouseOut={() => setLineHover(null)}
            >
              <Td>
                {lineHover !== track.id ? (
                  idx + 1
                ) : (
                  <IconButton
                    aria-label={`Play ${track.title}`}
                    icon={<FaPlay />}
                    variant="unstyled"
                    onClick={() =>
                      setAudioPlay({
                        trackTitle: track.title,
                        artist: {
                          id: track.artist.id,
                          name: track.artist.name,
                        },
                        src: track.preview,
                        albumCover: track.album ? track.album.cover_medium : '',
                      })
                    }
                  />
                )}
              </Td>

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
