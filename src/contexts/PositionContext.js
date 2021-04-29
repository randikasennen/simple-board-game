import { createContext, useContext } from 'react';

export const PositionContext = createContext();

export const usePosition = () => useContext(PositionContext);

export default function PositionContextProvider(props) {
    const { value, children } = props;

    return (
        <PositionContext.Provider value={value}>
            {children}
        </PositionContext.Provider>
    )
}