import { useState } from "react"

export function useSidebar() {
  const [isOpen, setMyVariable] = useState<Boolean>(false)
  
  const updateVariable = (newValue: Boolean) => {
    setMyVariable(newValue)
  }
  
  return {
    isOpen,
    updateVariable
  }
}