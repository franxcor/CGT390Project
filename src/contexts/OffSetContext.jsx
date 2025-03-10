import {createContext, useState, useEffect} from 'react';

import Datetime from 'react-datetime';
export const OffSetContext = createContext();

export const OffSetProvider = ({children}) => {
    const [offSet, setOffSet] = useState(0);
    const [miniOffSet, setMiniOffSet] = useState(0);
    return (
        <OffSetContext.Provider value={{offSet, setOffSet, miniOffSet, setMiniOffSet}}>
            {children}
        </OffSetContext.Provider>
    )
}