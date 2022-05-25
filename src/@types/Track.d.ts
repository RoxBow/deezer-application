import type { Artist } from './Artist';
import type { Album } from './Album';

export interface Track {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  preview: string;
  md5_image: string;
  artist: Artist;
  album: Album;
}
