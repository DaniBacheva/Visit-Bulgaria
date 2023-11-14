import { useState } from 'react'

export const useLocalStorage =(key, initialValue) => {

      const [state, setState] = useState(()=> {
        const persistedStateJSON = localStorage.getItem(key);
        if (persistedStateJSON){
            const persistedState = JSON.parse(persistedStateJSON);

            return persistedState;
        }

        return initialValue
      });

      const setLocalStorageState =(value)=> {
        setState(value);
//check if value is a function - set the result- not to break JSON stringify
        localStorage.setItem(key, JSON.stringify(value))
      };

      return [
        state,
        setLocalStorageState,
      ]
}