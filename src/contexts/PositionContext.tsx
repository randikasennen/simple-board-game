import { ReactNode, createContext, useContext } from 'react';

type PositionContextType = [
    position: number,
    setPosition: (position: number) => void
]

interface Props {
    value: any;
    children: ReactNode;
}

const PositionContext = createContext<PositionContextType>([ 0, () => {} ]);

export const usePosition = () => useContext(PositionContext);

export default function PositionContextProvider(props: Props) {
    const { value, children } = props;

    return (
        <PositionContext.Provider value={value}>
            {children}
        </PositionContext.Provider>
    )
}