import { StyleSearch } from './style.search';
import SearchComponents from '../../reusible/SearchComponents';
import { FC } from 'react'
import { Character, SearchDataProp } from '../../types'
import { Name, StyledCart, PersonWrapper } from '../HomePage/style.homeComponent'
import Avatar from '../../reusible/Avatar'

const DumbSearch: FC<SearchDataProp> = ({data}) => (
    <StyleSearch>
        <SearchComponents/>
        <PersonWrapper>
            {data?.map((character: Character) => (
                <StyledCart>
                    <Avatar data={character}/>
                    <Name>{character.name}</Name>
                </StyledCart>
            ))}
        </PersonWrapper>
    </StyleSearch>
);

export default DumbSearch;
