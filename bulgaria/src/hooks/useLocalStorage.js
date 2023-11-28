import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {

  const [state, setState] = useState(() => { // sinhronno da iz4islim steta - 6te proweri za auth
    const persistedStateJSON = localStorage.getItem(key);

    if (persistedStateJSON) {
      const persistedState = JSON.parse(persistedStateJSON);
      return persistedState;
    }
    
    return initialValue;
  });

  const setLocalStorageState = (value) => {
    setState(value);

    //check if value is a function - set the result- not to break JSON stringify   
    let serializedValue;
    if (typeof value === 'function') {
      serializedValue = JSON.stringify(value(state));
    }
    else {
      serializedValue = JSON.stringify(value);
    }

    localStorage.setItem(key, serializedValue)
  };

  return [
    state,
    setLocalStorageState,
  ]
}