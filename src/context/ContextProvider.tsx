import { UserData } from './index'
import { FC, useState } from 'react'
import { Character, ChildrenProp } from '../types'

const ContextProvider: FC<ChildrenProp> = ({children}) => {
    const [data, setData] = useState<null|Character[]>(null)

    const handleChangeData = (data: Character[]) => {
        setData(data);
    }

    return (
        <UserData.Provider value={{
            data,
            handleChangeData
        }}>
            {children}
        </UserData.Provider>
    )
}

export default ContextProvider