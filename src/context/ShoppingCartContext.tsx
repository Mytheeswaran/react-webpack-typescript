import { ReactNode, createContext, useContext } from 'react'

type ShoppingCartProviderProps = {
  children: ReactNode
}

const ShoppingCartContext = createContext({})

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

// ----------------------------------Notes----------------------------------

{
  /* 
    Refer context folder in IBT React Learning project for better understanding of Context
  */
}
