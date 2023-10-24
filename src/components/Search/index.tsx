import DumbSearch from './DumbSearch';
import { customQuerySelector } from '../../reusible/querySelector';
import { useLocation } from 'react-router-dom';
const Search = () => {
  const location = useLocation();

  const queryName = customQuerySelector(location.search, 'search-term');

  return <DumbSearch />;
};

export default Search;
