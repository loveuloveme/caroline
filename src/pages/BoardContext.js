import React, { useContext, useEffect, useState } from "react";
import { toggleArray } from "./helpers";

export const BoardContext = React.createContext();

export function useBoard(){
    return useContext(BoardContext);
}

export default function BoardProvider({ children }){
    const [query, setQuery] = useState({
        tag: [],
        state: [],
        user: []
    });

    const toggleUser = (userId) => {
        setQuery(prev => {
            return {
                ...prev,
                user: toggleArray([...prev.user], userId)
            }
        })
    };

    const toggleTag = (tagId) => {
        setQuery(prev => {
            return {
                ...prev,
                tag: toggleArray([...prev.tag], tagId)
            }
        })
    };

    const toggleState = (stateId) => {
        setQuery(prev => {
            return {
                ...prev,
                state: [stateId]
            }
        })
    };

    return (
        <BoardContext.Provider value={{ query, toggleUser, toggleTag, toggleState }}>
            {children}
        </BoardContext.Provider>
    );
}