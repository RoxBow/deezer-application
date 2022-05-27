import type { NextPage } from 'next';
import Search from '@components/Search/Search';
import { useApp } from '@components/AppProvider/App.context';
import { useEffect, useState } from 'react';
import type { Track } from 'types/Track';
import TrackList from '@components/TrackList/TrackList';
import useSwr from 'swr';

const Home: NextPage = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [term, setTerm] = useState('on verra');

  const { setIsLoading } = useApp();
  const { data, error } = useSwr(term ? `/api/search?term=${term}` : undefined);

  useEffect(() => {
    if (data) {
      setTracks(data.data.data);
      setIsLoading(false);
    } else if (term && !data && !error) {
      setIsLoading(true);
    }
  }, [term, data, error, setTracks, setIsLoading]);

  return (
    <main>
      <Search value={term} onChange={setTerm} />
      <TrackList tracks={tracks} />
    </main>
  );
};

export default Home;
