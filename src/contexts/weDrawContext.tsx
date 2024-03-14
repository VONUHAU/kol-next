import React, {
  createContext,
  ReactNode,
  useState,
  FunctionComponent,
  useContext,
} from 'react'

// Define the shape of the context data and its updater function
interface WeDrawContextType {
  isCompleted: boolean
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>
}

// Create the context with a default initial value. The initial state and setter can be typed directly.
export const WeDrawContext = createContext<WeDrawContextType | null>(null)

// Define a type for the props of the WeDrawProvider component
interface WeDrawProviderProps {
  children: ReactNode // ReactNode is a type that can render anything React can render.
}

// Define the provider component with typed props
export const WeDrawProvider: FunctionComponent<WeDrawProviderProps> = ({
  children,
}) => {
  const [isCompleted, setCompleted] = useState<boolean>(true) // Now the state is typed as boolean

  return (
    <WeDrawContext.Provider value={{ isCompleted, setCompleted }}>
      {children}
    </WeDrawContext.Provider>
  )
}

export const useWeDraw = (): WeDrawContextType => {
  const context = useContext(WeDrawContext)
  if (!context) {
    throw new Error('useWeDraw must be used within a WeDrawProvider')
  }
  return context
}
