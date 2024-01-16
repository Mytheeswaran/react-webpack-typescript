/* eslint-disable prettier/prettier */
import { useState } from 'react'

export function useLocalStorage(key, defaultValue) {
    const [localStorageState, setLocalStorageState] = useState(() => {
        try {
            const localStorageValue = localStorage.getItem(key)

            if(localStorageValue){
                return JSON.parse(localStorageValue)
            }else{
                localStorage.setItem(key, JSON.stringify(defaultValue)) 
                return defaultValue
            }
            
        } catch (e) {console.log('error in useLocalStorage', e)}
    })

    const setLocalStorageFromOutside = (valOrFunc)=>{
        let newValue
        if(typeof valOrFunc === 'function'){
            const fn = valOrFunc
            newValue = fn(localStorageState)

        }else{
            newValue = valOrFunc
        }
        localStorage.setItem(key, JSON.stringify(newValue))
        setLocalStorageState(newValue)

    }

    return [localStorageState, setLocalStorageFromOutside]
}
