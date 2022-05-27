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
  const [indexPagination, setIndexPagination] = useState(0);

  const { setIsLoading, isLoading } = useApp();
  const { data, error } = useSwr(
    term ? `/api/search?term=${term}&index=${indexPagination}` : undefined
  );

  useEffect(() => {
    if (data && indexPagination > 0) {
      setTracks((prevTracks) => [...prevTracks, ...data.data.data]);
      setIsLoading(false);
    } else if (data && indexPagination === 0) {
      setTracks(data.data.data);
      setIsLoading(false);
    } else if (term && !data && !error) {
      setIsLoading(true);
    }
  }, [term, data, error, setTracks, setIsLoading, indexPagination]);

  return (
    <main>
      <Search value={term} onChange={setTerm} />
      <TrackList
        tracks={tracks}
        loadMore={() => {
          if (!isLoading) {
            setIndexPagination((prevPagination) => prevPagination + 25);
          }
        }}
        hasMore={!!data?.data?.next || false}
      />
    </main>
  );
};

export default Home;
