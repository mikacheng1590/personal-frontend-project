import { useCallback } from 'react';
import { Button } from '@mantine/core';
import { FaPlus } from "react-icons/fa";

import { useInputContext } from '@/app/to-do-list/_context';

export const EnterButton = () => {
  const { setToDoList, toDoList, currentInput, setCurrentInput, setInputError, inputError } = useInputContext()

  const onClick = useCallback(() => {
    if (!currentInput) {
      setInputError('Please enter something!')
      return
    }

    setInputError('')

    const newItem = {
      id: self.crypto.randomUUID(),
      content: currentInput,
      timestamp: Date.now()
    }
    
    setToDoList([...toDoList, newItem])
    setCurrentInput('')
  }, [currentInput, toDoList])

  return (
    <Button
      variant="filled"
      fullWidth
      onClick={onClick}
      className='max-w-72 mb-6'>
      <FaPlus />
    </Button>
  )
}