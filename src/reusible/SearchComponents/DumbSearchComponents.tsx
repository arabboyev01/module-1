import React, { FC } from 'react';
import { SearchContainer, SearchInput, SearchButton } from './styled.search';
import { SearchProp } from '../../types';

const DumbSearchComponents: FC<SearchProp> = ({
  setSearchTerm,
  handleSearch,
  searchTerm,
}) => (
  <SearchContainer>
    <SearchInput
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <SearchButton variant="contained" onClick={handleSearch}>
      Search
    </SearchButton>
  </SearchContainer>
);

export default DumbSearchComponents;
