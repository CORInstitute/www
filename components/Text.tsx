import { MutableRefObject, ReactNode } from "react";
import styles from "../styles/Text.module.css"

export enum FullScreenFlavor {
    BLUE, WHITE, BLACK
}

export default function FullScreen({ children, flavor, innerRef }: { children: ReactNode, flavor: FullScreenFlavor, innerRef: MutableRefObject<any> }) {
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
        <div className={`${styles.container} ${flavorStyle}`} ref={innerRef}>
            {children}
        </div>
    )
}
