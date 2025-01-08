import { CloseButton } from '@mantine/core';
import { useClickOutside } from '@mantine/hooks';
import { useCallback, useEffect, useState } from 'react';
import { FaPen } from "react-icons/fa";
import { IToDoItem } from "@/app/to-do-list/_interface/toDoList"
import { useInputContext } from '@/app/to-do-list/_context';
import { useIsTouchDevice } from '@/app/_hooks';
import { GeneralInput } from './GeneralInput';

export const Item = ({
  id,
  content,
  // timestamp
}: IToDoItem) => {
  const { toDoList, setToDoList } = useInputContext()
  const [ isDisplay, setIsDisplay ] = useState<boolean>(true)
  const [ itemContent, setItemContent ] = useState<string>(content)
  const [ itemError, setItemError ] = useState<string>('')
  const isTouchDevice = useIsTouchDevice()

  const onClickDelete = useCallback(() => {
    setToDoList(toDoList.filter(item => item.id !== id))
  }, [id, setToDoList, toDoList])

  const closeDisplay = () => {
    setIsDisplay(false)
  }

  const confirmEdit = useCallback(() => {
    setItemError('')

    const editedItem = {
      id,
      content: itemContent,
      timestamp: Date.now()
    }

    setToDoList(toDoList.map((item) => {
      return item.id === id ? {...item,
        ...editedItem}
        : item
      }
    ))
  }, [id, itemContent, setToDoList, toDoList])

  const ref = useClickOutside(() => {
    if (!itemContent) {
      setItemError('Please enter something!')
      return
    }

    confirmEdit()
    setIsDisplay(true)
  });

  useEffect(() => {
    setItemContent(content)
  }, [content])

  return (
    <div className='flex items-center justify-between w-full'>
      {/* <div>
        {id}
      </div>
      <div>
        {timestamp}
      </div> */}

      {isDisplay ?
        <div className="grow" onDoubleClick={closeDisplay}>
          {itemContent}
        </div> :
        <div className='w-full grow'>
          <GeneralInput
            value={itemContent}
            ref={ref}
            onChangeFunc={(e) => setItemContent(e.target.value)}
            error={itemError}
          />
        </div>
      }
      {isDisplay && isTouchDevice ? <FaPen onClick={closeDisplay}/> : null}
      <CloseButton onClick={onClickDelete}/>
    </div>
  )
}