import type { FC } from 'react';
import { Box, IconButton, Image, Link, Td, Tr } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import LinkNext from 'next/link';
import type { Track } from 'types/Track';
import { useApp } from '@components/AppProvider/App.context';

type TrackItemProps = {
  track: Track;
  isHover: boolean;
  setHover: (trackId: number | null) => void;
  index: number;
};

const TrackItem: FC<TrackItemProps> = ({ track, isHover, setHover, index }) => {
  const { setAudioPlay } = useApp();

  return (
    <Tr
      key={track.id}
      onMouseOver={() => setHover(track.id)}
      onMouseOut={() => setHover(null)}
    >
      <Td>
        {!isHover ? (
          <Box as="p" w="50px">
            {index}
          </Box>
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
  );
};

export default TrackItem;
