import React, { useContext, useState } from "react";

export const BoardContext = React.createContext();

export function useBoard() {
    return useContext(BoardContext);
}

export default function BoardProvider({ children }) {
    const [query, setQuery] = useState({
        tag: [],
        state: [],
        user: []
    });

    const toggleArray = (array, value) => {
        var index = array.indexOf(value);

        if (index === -1) {
            array.push(value);
        } else {
            array.splice(index, 1);
        }

        return array;
    }

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
            value={{ query, toggleUser, toggleTag, toggleState, clearState, clearTag, clearUser }}
        >
            {children}
        </BoardContext.Provider>
    );
}