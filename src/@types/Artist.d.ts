export interface BaseArtist {
  id: number;
  name: string;
  link: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  tracklist: string;
  type: string;
}

export interface Artist extends BaseArtist {
  nb_album: number;
  nb_fan: number;
  radio: boolean;
}
