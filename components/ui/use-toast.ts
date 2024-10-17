// Simplified version of use-toast.ts
import { useState, useEffect } from 'react'

export interface Toast {
  id: string
  title?: string
  description?: string
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prevToasts) => [...prevToasts, { ...toast, id }])
  }

  const dismissToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setToasts((prevToasts) =>
        prevToasts.filter((toast) => {
          if (toast.duration && Date.now() - new Date(toast.id).getTime() > toast.duration) {
            return false
          }
          return true
        })
      )
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return {
    toasts,
    addToast: (props: Omit<Toast, "id">) => addToast(props),
    dismissToast: (id: string) => dismissToast(id),
  }
}