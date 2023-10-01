import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import { api } from '../services/api';
import { Alert } from 'react-native';

interface Props {
  children: JSX.Element;
}

interface DataContextData {
  isLoading: boolean;
  changeGenre: (genre: string) => void;
  changePage: (page: number) => void;
  page: number;
  selectedGenre: string;
  movies: [];
}

const DataContext = createContext<DataContextData>({} as DataContextData);

export function DataProvider({ children }: Props): JSX.Element {
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const changeGenre = useCallback((genre: string) => {
    setSelectedGenre(genre);
    setPage(1);
  }, []);

  const changePage = useCallback((page: number) => {
    setPage(page);
  }, []);

  async function getMovies() {
    try {
      setIsLoading(true);
      const response = await api.get('/titles', {
        params: {
          year: 2023,
          info: 'base_info',
          sort: 'year.incr',
          genre: selectedGenre || null,
          page: page,
        },
      });

      setMovies(response.data.results);
    } catch (error) {
      Alert.alert('Error', 'An error has occurred, please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, [selectedGenre, page]);

  return (
    <DataContext.Provider value={{ changeGenre, changePage, page, isLoading, selectedGenre, movies }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData(): DataContextData {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useData must be used within an DataProvider');
  }
  return context;
}
