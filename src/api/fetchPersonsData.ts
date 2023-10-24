import { SetStateAction, Dispatch } from 'react';
import { api } from '../api/config';
import { Character } from '../types';

export const fetchPersonsData = (
  setLoading: Dispatch<SetStateAction<boolean>>,
  setData: Dispatch<SetStateAction<Character[] | null>>,
  setCount: Dispatch<SetStateAction<number>>,
  page: string | undefined
): void => {
  setLoading(true);
  api
    .getPersons(`api/people/?page=${page}`)
    .then((data) => {
      setData(data.results);
      setCount(Math.floor(data.count / 10));
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
};
