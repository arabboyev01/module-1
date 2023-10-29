import DumbHomaPage from './DumbHomaPage';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from '../../types';
import { fetchPersonsData } from '../../api/fetchPersonsData';
import LoaderComponent from '../../reusible/Loader';
import { UserData } from '../../context'

const HomePage = () => {
  const { page } = useParams();
  const [data, setData] = useState<Character[] | null>(null);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const context = useContext(UserData);

  const handleFetchData = useCallback(() => {
    fetchPersonsData(setLoading, setData, setCount, page, context?.handleChangeData);
  }, [page]);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  if (data === null || loading) return <LoaderComponent />;

  return <DumbHomaPage count={count} data={data} />;
};
export default HomePage;
