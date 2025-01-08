import { useCallback, useState } from 'react';
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  MouseSensor,
  useSensor,
  useSensors,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
  UniqueIdentifier
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useInputContext } from "@/app/to-do-list/_context";
import { SortableItem } from "@/app/to-do-list/_client-components";
import { IToDoItem } from "@/app/to-do-list/_interface/toDoList"

export const ItemList = () => {
  const { toDoList, setToDoList } = useInputContext()
  const [ activeItem, setActiveItem ] = useState<IToDoItem | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10, // enable sort function when dragging 10px
      },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return
    
    if (active.id !== over.id) {
      setToDoList((items) => {
        const findIdx = (uid: UniqueIdentifier) => items.map(({ id }) => id).indexOf(uid as string)
        const oldIndex = findIdx(active.id);
        const newIndex = findIdx(over.id);
        
        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveItem(null);
  }

  const handleDragStart = useCallback((event: DragStartEvent) => {
    const currentDraggingItem = toDoList.find(({ id }) => id === event.active.id) ?? null;
    setActiveItem(currentDraggingItem)
  }, [toDoList])

  return (
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext 
        items={toDoList}
        strategy={verticalListSortingStrategy}
      >
        {toDoList.map(({ id, content, timestamp }, idx) =>
          <SortableItem key={idx} id={id} content={content} timestamp={timestamp} />
        )}

        <DragOverlay>
          {activeItem ? (
            <SortableItem id={activeItem.id} content={activeItem.content} timestamp={activeItem.timestamp} /> 
          ): null}
        </DragOverlay>
      </SortableContext>
    </DndContext>
  )
}