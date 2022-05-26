import type { BaseArtist } from 'types/Artist';
import type { BaseAlbum } from 'types/Album';

export interface Track extends BaseTrack {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  preview: string;
  md5_image: string;
  artist: BaseArtist;
  album?: BaseAlbum;
}
