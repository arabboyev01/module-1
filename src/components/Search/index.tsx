import DumbSearch from './DumbSearch';
import { customQuerySelector } from '../../reusible/querySelector';
import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react'
import { UserData } from '../../context'
import LoaderComponent from '../../reusible/Loader'
import { Character } from '../../types'

const Search = () => {
    const location = useLocation();

    const [data, setData] = useState<Character[] | null>(null);

    const queryName: string = customQuerySelector(location.search, 'search-term') as string
    const context = useContext(UserData);

    useEffect(() => {
        context?.data?.filter((singleData: Character) => {
            if(singleData.name.includes(queryName)) setData([singleData])
        })
    }, [context?.data, queryName])

    console.log(data)

    if (data === null || data === undefined) return <LoaderComponent/>

    return <DumbSearch data={data}/>;
};

export default Search;
