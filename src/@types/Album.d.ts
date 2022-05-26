import type { Track } from 'types/Track';
import type { BaseArtist } from 'types/Artist';

type Kind = {
  id: number;
  name: string;
  picture: string;
  type: string;
};

export type BaseAlbum = {
  id: number;
  title: string;
  link: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  release_date: string;
  tracklist: string;
  type: 'album';
};

export interface Album extends BaseAlbum {
  share: string;
  genre_id: number;
  genres: {
    data: Kind[];
  };
  label: string;
  nb_tracks: number;
  duration: number;
  fans: number;
  available: true;
  explicit_lyrics: false;
  explicit_content_lyrics: 7;
  explicit_content_cover: 0;
  artist: BaseArtist;
  tracks: {
    data: Track[];
  };
}
