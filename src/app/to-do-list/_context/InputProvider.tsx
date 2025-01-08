import { createContext, useState, useContext } from 'react'
import { IToDoItem } from "../_interface/toDoList"

interface IInputContext {
  currentInput: string
  setCurrentInput: React.Dispatch<React.SetStateAction<string>>
  toDoList: IToDoItem[]
  setToDoList: React.Dispatch<React.SetStateAction<IToDoItem[]>>
  inputError: string
  setInputError: React.Dispatch<React.SetStateAction<string>>
}

interface IProps {
  children: React.ReactNode
}

export const InputContext = createContext<IInputContext | undefined>(undefined);

export const useInputContext = () => {
  const context = useContext(InputContext)

  if (context === undefined) {
    throw new Error('context not found')
  }

  return context
}

export const InputProvider: React.FC<IProps> = ({children}) => {
  const [ textInput, setTextInput ] = useState<string>('')
  const [ toDoList, setToDoList ] = useState<IToDoItem[]>([])
  const [ inputError, setInputError ] = useState<string>('')

  return (
    <InputContext.Provider value={
      {
        currentInput: textInput,
        setCurrentInput: setTextInput,
        toDoList,
        setToDoList,
        inputError,
        setInputError
      }
    }>
      {children}
    </InputContext.Provider>
  )
}