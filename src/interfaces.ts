interface Movie {
  id: string;
  primaryImage: {
    url: string;
  };
  releaseYear: {
    year: string;
  };
  titleText: {
    text: string;
  };
  type: string;
  titleType: {
    id: string;
    isSeries: boolean;
    isEpisode: boolean;
    text: string;
  };
  ratingsSummary: {
    aggregateRating: number;
    voteCount: number;
  };
  genres: {
    genres: {
      id: string;
      text: string;
    }[];
  }
  plot: {
    plotText: {
      plainText: string;
    };
  };
}

interface Episode {
  id: string;
  tconst: string;
  seasonNumber: string;
  episodeNumber: string;
  titleText: {
    text: string;
  };
}
