export interface ValuesType {
  musicInfo: Music | string;
  description: string;
  battleAvailability: boolean;
}

export interface Music {
  trackId: string;
  trackName: string;
  artistName: string;
  artworkUrl100: string;
  previewUrl: string;
}
