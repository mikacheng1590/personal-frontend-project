import { TextInput } from '@mantine/core';
import { IGeneralInput } from '@/app/to-do-list/_interface/toDoList';

export const GeneralInput: React.FC<IGeneralInput> = ({
  value,
  onChangeFunc,
  error = '',
  placeholder = 'What to do?',
  className = '',
  ref = null
}) => {  
  return (
    <TextInput
      className={className}
      placeholder={placeholder}
      value={value}
      error={error}
      onChange={onChangeFunc}
      ref={ref}
    />
  )
}