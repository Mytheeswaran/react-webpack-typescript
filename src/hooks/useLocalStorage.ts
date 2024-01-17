/* eslint-disable prettier/prettier */
import { useState, useEffect} from 'react'

export function useLocalStorage<T>(key: string, defaultValue: T[] | (()=>T)) {
    const [localStorageState, setLocalStorageState] = useState<T>(() => {
        try {
            const localStorageValue = localStorage.getItem(key)

            if(localStorageValue){
                return JSON.parse(localStorageValue)
            }else{

                if(typeof defaultValue === 'function'){
                    return (defaultValue as ()=>T)() // casting reason -->https://www.youtube.com/watch?v=lATafp15HWA @ timeline: 59:36
                }else{
                    return defaultValue
                }                
            }
            
        } catch (e) {console.log('error in useLocalStorage', e)}
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(localStorageState))
    },[key, localStorageState])

    return [localStorageState, setLocalStorageState] as [typeof localStorageState, typeof setLocalStorageState]
}

{
    /**  --------------------------------Previous approach without useEffect----------------------------------

        import { useState } from 'react'

        export function useLocalStorage<T>(key: string, defaultValue: T | (()=>T)) {
            const [localStorageState, setLocalStorageState] = useState<T>(() => {
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

            const setLocalStorageFromOutside = (valOrFunc: ()=>T)=>{
                let newValue
                if(typeof valOrFunc === 'function'){
                    newValue = valOrFunc(localStorageState)
                }else{
                    newValue = valOrFunc
                }
                localStorage.setItem(key, JSON.stringify(newValue))
                setLocalStorageState(newValue)
            }

            return [localStorageState, setLocalStorageFromOutside] as [typeof localStorageState, typeof setLocalStorageFromOutside]
        }

    */
}
