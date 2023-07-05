import { useState } from "react"

const isOpen = useState<Boolean>(false)

export function useSidebar() {
  return {
    isOpen,
  }
}