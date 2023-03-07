import { useQuery } from '@tanstack/react-query';

import { getBattleList } from '../api';
import { GenreValue } from '../types';

export const useGetBattleList = (genre?: GenreValue) => {
  return useQuery({
    queryKey: ['battleList_getBattleList', genre],
    queryFn: async () => {
      const data = await getBattleList(genre);
      return data;
    },
  });
};
