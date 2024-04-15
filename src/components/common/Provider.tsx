import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from 'react'

export type AppContext<T> = [T, Dispatch<SetStateAction<T>>]
const App = createContext<AppContext<number | string>>([0, () => { }])

function AppProvider({ children }: { children: ReactNode }) {
  const state = useState<number | string>(0)
  return <App.Provider value={state}>{children}</App.Provider>
}

export const useId = () => useContext(App)

export default AppProvider
