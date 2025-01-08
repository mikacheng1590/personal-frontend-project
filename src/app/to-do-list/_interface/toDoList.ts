import { RefObject } from "react"

export interface IToDoItem {
  id: string
  timestamp: number
  content: string
}

export interface IGeneralInput {
  value: string
  error?: string
  placeholder?: string
  className?: string
  ref?: RefObject<HTMLInputElement>
  onChangeFunc: (e: React.ChangeEvent<HTMLInputElement>) => void
}