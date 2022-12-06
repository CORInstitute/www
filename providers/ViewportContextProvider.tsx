import { createContext, MutableRefObject, ReactNode, useRef } from "react";

export interface IViewportContext {
    blueScreenRef: MutableRefObject<any>
    whiteScreenRef: MutableRefObject<any>
    blackScreenRef: MutableRefObject<any>
}


export const ViewportContext = createContext<IViewportContext>({} as IViewportContext)

export const ViewportContextProvider = ({ children }: { children: ReactNode }) => {
    const blueScreenRef = useRef()
    const whiteScreenRef = useRef()
    const blackScreenRef = useRef()

    return (
        <ViewportContext.Provider value={{
            blueScreenRef, whiteScreenRef, blackScreenRef
        }}>
            {children}
        </ViewportContext.Provider>
    )
}