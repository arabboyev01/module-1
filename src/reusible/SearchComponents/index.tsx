import DumbSearchComponents from './DumbSearchComponents';
import { FC, useState } from 'react';
import { cachedSearchTypes } from '../../cache/localStorageItems';
import { useNavigate } from 'react-router-dom';

const SearchComponents: FC = () => {
  const [search, setSearchTerm] = useState(cachedSearchTypes);
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/search?search-term=${search.trim()}`);
    localStorage.setItem('searchData', search);
  };

  return (
    <DumbSearchComponents
      setSearchTerm={setSearchTerm}
      handleSearch={handleSearch}
      searchTerm={search}
    />
  );
};

export default SearchComponents;
