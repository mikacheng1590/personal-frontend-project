import { RiDragMove2Fill } from "react-icons/ri";
import { HiCursorClick } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { EnterButton, Input, ItemList } from "./_client-components";
import { InputProvider } from "./_context";

export default function ToDoListPage() {
  return (
    <div className="flex items-center justify-center flex-col gap-y-3.5 py-3.5 mx-auto w-9/12 max-w-[800px]">
      <header className="text-4xl">To Do List</header>
      <ul>
        <li className="flex items-center gap-x-1"><FaPlus />Add your to-do items</li>
        <li className="flex items-center gap-x-1"><HiCursorClick />Double click to edit on computer</li>
        <li className="flex items-center gap-x-1"><RiDragMove2Fill />Rearrange by dragging</li>
      </ul>
      <InputProvider>
        <Input />
        <EnterButton />
        <ItemList />
      </InputProvider>
    </div>
  );
}
