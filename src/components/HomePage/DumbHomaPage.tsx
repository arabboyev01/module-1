import CustomPagination from '../../reusible/Pagination';
import { Character, HomePageProps } from '../../types';
import type { FC } from 'react';
import {
  Name,
  PersonWrapper,
  StyledCart,
  StyleHomeComponent,
} from './style.homeComponent';
import SearchComponents from '../../reusible/SearchComponents';
import Avatar from '../../reusible/Avatar';

const DumbHomaPage: FC<HomePageProps> = ({ count, data }) => (
  <StyleHomeComponent>
    <SearchComponents />
    <PersonWrapper>
      {data?.map((character: Character) => (
        <StyledCart>
          <Avatar data={character} />
          <Name>{character.name}</Name>
        </StyledCart>
      ))}
    </PersonWrapper>
    <CustomPagination count={count} />
  </StyleHomeComponent>
);

export default DumbHomaPage;
