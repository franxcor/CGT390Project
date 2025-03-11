import {createContext, useState, useEffect} from 'react';

import Datetime from 'react-datetime';

export const AddEventContext = createContext();

export const AddEventProvider = ({children}) => {
    const [eventOpen, setEventOpen] = useState(false);

    return (
        <AddEventContext.Provider value = {{eventOpen, setEventOpen}}>
            {children}
        </AddEventContext.Provider>
    )
}