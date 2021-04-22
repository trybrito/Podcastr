import { createContext } from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string
};

type PlayerContextData = {
  episodeList: Array<Episode>;
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episodes: Episode) => void;
  togglePlay: () => void;
  setPlayingState: (state: boolean) => void
};

export const PlayerContext = createContext({} as PlayerContextData);