import { ReactNode } from "react";
import styles from "../styles/FullScreen.module.css"

export enum FullScreenFlavor {
    BLUE, WHITE
}

export default function FullScreen({ children, flavor }: { children: ReactNode, flavor: FullScreenFlavor }) {
    return (
        <div className={`${styles.container} ${flavor === FullScreenFlavor.BLUE ? styles.flavorBlue : styles.flavorWhite}`}>
            {children}
        </div>
    )
}