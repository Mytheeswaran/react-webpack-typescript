import { ReactNode, createContext, useContext, useState } from 'react'
import { ShoppingCart } from '../components/ShoppingCart'
import { useLocalStorage } from '../hooks/useLocalStorage'

type ShoppingCartContextType = {
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  openCart: () => void
  closeCart: () => void
  cartItems: CartItem[]
  cartQuantity: number
}

type ShoppingCartProviderProps = {
  children: ReactNode
}

export type CartItem = {
  id: number
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage('cart-items', [])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => id === item.id)?.quantity || 0
  }

  const increaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id)
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id)
    })
  }

  const openCart = () => {
    setIsOpen(true)
  }
  const closeCart = () => {
    setIsOpen(false)
  }

  const cartQuantity = cartItems.reduce((cartQty, item) => {
    return (cartQty = cartQty + item.quantity)
  }, 0)

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}

      {isOpen ? <ShoppingCart isOpen={isOpen} /> : null}
    </ShoppingCartContext.Provider>
  )
}

// ----------------------------------Notes----------------------------------

{
  /* 
    1. Refer context folder in IBT React Learning project for better understanding of Context.

    2. : vs as in ts --> Type Annotation vs Assertion in Typescript 
      https://medium.com/@InspireTech/exploring-type-annotation-and-type-assertion-in-typescript-a-comprehensive-comparison-4d56d2b11071

    3. const ShoppingCartContext = createContext({} as ShoppingCartContextType)
      if : is used for typing, createContext() throws error 'got 2 args', so using as for typing.

    4. ?. operator clarification (can be used along with array.find() which returns object if it finds in array rather than true)

      usecase: cartItems.find((item) => id === item.id)?.quantity || 0
      The above can be written as:

        const inventory = [
          { name: "apples", quantity: 2 },
          { name: "bananas", quantity: 0 }
        ];

        inventory.find((item)=>item.name === "apples")  
          ans: {name: 'apples', quantity: 2}

        inventory.find((item)=>item.name === "oranges").quantity
          ans: Cannot read properties of undefined (reading 'quantity')

        inventory.find((item)=>item.name === "oranges")?.quantity || 0
          ans: 0

      
    5. useLocalStorage() --> https://www.geeksforgeeks.org/reactjs-uselocalstorage-custom-hook/ 
  */
}
