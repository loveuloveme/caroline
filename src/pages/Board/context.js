import React, { useContext, useState } from "react";
import { toggleArray } from "../../helpers";

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

    const clearUser = () => {
        setQuery(prev => {
            return {
                ...prev,
                user: []
            }
        })
    };

    const clearTag = () => {
        setQuery(prev => {
            return {
                ...prev,
                tag: []
            }
        })
    };

    const clearState = () => {
        setQuery(prev => {
            return {
                ...prev,
                state: []
            }
        })
    };

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
                state: prev.state[0] === stateId ? [] : [stateId]
            }
        })
    };

    return (
        <BoardContext.Provider
            value={{ query,toggleUser, toggleTag, toggleState, clearState, clearTag, clearUser }}
        >
            {children}
        </BoardContext.Provider>
    );
}