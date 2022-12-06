import { ReactNode } from "react";
import styles from "../styles/FullScreen.module.css"

export enum FullScreenFlavor {
    BLUE, WHITE, BLACK
}

export default function FullScreen({ children, flavor }: { children: ReactNode, flavor: FullScreenFlavor }) {
    let flavorStyle;
    switch (flavor) {
        case FullScreenFlavor.BLUE:
            flavorStyle = styles.flavorBlue;
            break;
        case FullScreenFlavor.WHITE:
            flavorStyle = styles.flavorWhite;
            break;
        default:
            flavorStyle = styles.flavorBlack;
            break;
    }

    return (
        <div className={`${styles.container} ${flavorStyle}`}>
            {children}
        </div>
    )
}