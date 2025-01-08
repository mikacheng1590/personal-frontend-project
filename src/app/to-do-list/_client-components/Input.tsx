import { useInputContext } from '@/app/to-do-list/_context';
import { GeneralInput } from './GeneralInput';

export const Input = () => {
  const { currentInput, setCurrentInput, inputError } = useInputContext()
  
  return (
    <GeneralInput
      className='w-full'
      value={currentInput}
      error={inputError}
      onChangeFunc={(e) => setCurrentInput(e.target.value)}
    />
  )
}