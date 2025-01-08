import { useMemo } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MdDragIndicator } from "react-icons/md";
import { IToDoItem } from "@/app/to-do-list/_interface/toDoList"
import { Item } from "@/app/to-do-list/_client-components";

export const SortableItem = ({
  id,
  content,
  timestamp
}: IToDoItem) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id, transition: null });

  const style = useMemo(() => {
    return {
      transform: CSS.Transform.toString(transform),
      transition,
    }
  }, [transform, transition])

  return (
    // touch-none: to enable drag action in mobile (ref: https://docs.dndkit.com/api-documentation/sensors/pointer#touch-action)
    <div ref={setNodeRef} style={style} className={`touch-none w-full flex justify-between p-2 border-solid border-black border-2 rounded ${isDragging ? 'opacity-50' : 'opacity-100'}`}>
      <Item
        id={id}
        content={content}
        timestamp={timestamp}
      />
      <button {...listeners} {...attributes}><MdDragIndicator /></button>
    </div>
  )
}