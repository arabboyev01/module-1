import { createContext } from 'react'
import { CreateContextType } from '../types'

export const UserData = createContext<CreateContextType|null>(null)
