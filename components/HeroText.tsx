import { ReactNode } from "react";
import styles from "../styles/HeroText.module.css"
import { FullScreenFlavor } from '../components/FullScreen'

export default function HeroText({ children, flavor }: { children: ReactNode, flavor: FullScreenFlavor }) {
    return (
        <h1 className={`${styles.hero} ${flavor === FullScreenFlavor.BLUE ? styles.flavorBlue : styles.flavorWhite}`}>
            {children}
        </h1>
    )
}