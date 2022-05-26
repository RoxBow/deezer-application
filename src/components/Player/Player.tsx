import { Flex, Box, Image, Link } from '@chakra-ui/react';
import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useApp } from '@components/AppProvider/App.context';
import LinkNext from 'next/link';

export type AudioPlay = {
  trackTitle: string;
  artist: {
    id: number;
    name: string;
  };
  src: string;
  albumCover: string;
};

const Player = () => {
  const { audioPlay } = useApp();

  return (
    <Flex
      position="fixed"
      bottom={0}
      left={0}
      w="100%"
      bg="white"
      display={audioPlay ? 'grid' : 'none'}
      gridTemplateColumns="1fr 2fr 1fr"
      borderTop="1px"
      borderColor="gray.400"
      zIndex={1}
      p={4}
      justify="center"
    >
      {audioPlay && (
        <Flex direction="row" align="center" mr="auto">
          {audioPlay.albumCover && (
            <Image
              boxSize="80px"
              objectFit="cover"
              src={audioPlay.albumCover}
              alt=""
              mr={2}
            />
          )}

          <Flex direction="column">
            <Box as="p" fontWeight="bold">
              {audioPlay.trackTitle}
            </Box>

            <LinkNext href={`/artist/${audioPlay.artist.id}`} passHref>
              <Link>{audioPlay.artist.name}</Link>
            </LinkNext>
          </Flex>
        </Flex>
      )}

      <Box
        as={AudioPlayer}
        p={0}
        layout="stacked-reverse"
        boxShadow="none"
        src={audioPlay?.src || ''}
        flex={1}
        showJumpControls={false}
        customIcons={{
          play: <FaRegPlayCircle />,
          pause: <FaRegPauseCircle />,
        }}
      />
    </Flex>
  );
};

export default Player;
