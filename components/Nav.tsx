import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import styles from '../styles/Nav.module.css'
import { ViewportContext } from '../providers/ViewportContextProvider';
import Link from 'next/link';

export default function Nav() {
    const { blueScreenRef, whiteScreenRef, blackScreenRef } = useContext(ViewportContext)
    const navRef = useRef<HTMLDivElement>(null)
    const blue = '#000AFF';
    const green = '#52FF00';
    const white = '#FFF';
    const black = '#000';
    const [iconContainerColor, setIconContainerColor] = useState<string>('#52FF00')
    const [iconColor, setIconColor] = useState<string>('#000AFF')
    const [iconSize, setIconSize] = useState<string>('66')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIconSize(window?.innerWidth < 900 ? '20' : '66')
        }
    }, [])

    const intersectCallback = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            // If blue screen is in the viewport
            if (entry.target === blueScreenRef.current && entry.intersectionRatio > 0.8) {
                setIconContainerColor(green)
                setIconColor(blue)
            }
            // If white screen is in the viewport
            else if (entry.target === whiteScreenRef.current && entry.intersectionRatio > 0.8) {
                setIconContainerColor(blue)
                setIconColor(white)
            }
            // If black screen is in the viewport
            else if (entry.target === blackScreenRef.current && entry.intersectionRatio > 0.8) {
                setIconColor(black)
                setIconContainerColor(white)
            }
        })
    }, [blueScreenRef, whiteScreenRef, blackScreenRef]);

    useEffect(() => {
        if (!navRef.current) {
            return
        }
        const options = {
            root: null,
            rootMargin: '0px',
            // use a few thresholds, it seems to have a higher refresh rate this way
            threshold: [0.5, 0.9, 1]
        }
        const observer = new IntersectionObserver(intersectCallback, options);

        if (blueScreenRef.current) {
            observer.observe(blueScreenRef.current);
        }
        if (whiteScreenRef.current) {
            observer.observe(whiteScreenRef.current);
        }
        if (blackScreenRef.current) {
            observer.observe(blackScreenRef.current);
        }


        return () => {
            if (blueScreenRef.current) {
                observer.unobserve(blueScreenRef.current);
            }
            if (whiteScreenRef.current) {
                observer.unobserve(whiteScreenRef.current);
            }
            if (blackScreenRef.current) {
                observer.unobserve(blackScreenRef.current);
            }

        }
    }, [intersectCallback, blueScreenRef, whiteScreenRef, blackScreenRef, navRef])

    return (
        <nav className={styles.nav} ref={navRef}>
            <div className={styles.navItem} style={{ color: iconContainerColor }}>
                {new Date().toLocaleDateString(undefined, { dateStyle: "medium" })}
            </div>

            <div className={styles.navItem} style={{ color: iconContainerColor }}>
                <Link href="/" style={{ textDecoration: "none" }}>
                    CORI
                </Link>
            </div>

            <div className={styles.navItem}>
                <Link href="/">
                    <svg width={iconSize} height={iconSize} viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="66" height="66" rx="33" fill={iconContainerColor} />
                        <path d="M49.533 33.726V32.274L40.788 31.449H40.7814H40.788L48.5496 27.3438L47.9952 26.004L39.6066 28.5912H39.6L39.6066 28.5846L41.9628 25.74H48.84C49.203 25.74 49.5 25.443 49.5 25.08V17.16C49.5 16.797 49.203 16.5 48.84 16.5H40.92C40.557 16.5 40.26 16.797 40.26 17.16V24.0372L37.4154 26.3934L37.4088 26.4V26.3934L39.996 18.0048L38.6562 17.4504L34.551 25.212V25.2186V25.212L33.726 16.467H32.274L31.449 25.212V25.2186V25.212L27.3438 17.4504L26.004 18.0048L28.5912 26.3934V26.4L28.5846 26.3934L21.8196 20.7966L20.79 21.8262L26.3868 28.5912L26.3934 28.5978H26.3868L18.0048 26.004L17.4504 27.3438L25.212 31.449H25.2186H25.212L16.467 32.274V33.726L25.212 34.551H25.2186H25.212L17.4504 38.6562L18.0048 39.996L26.3934 37.4088H26.4L26.3934 37.4154L20.7966 44.1804L21.8262 45.21L28.5912 39.6132L28.5978 39.6066V39.6132L26.004 47.9952L27.3438 48.5496L31.449 40.788V40.7814V40.788L32.274 49.533H33.726L34.551 40.788V40.7814V40.788L38.6562 48.5496L39.996 47.9952L37.4088 39.6066V39.6L37.4154 39.6066L44.1804 45.2034L45.21 44.1738L39.6132 37.4088L39.6066 37.4022H39.6132L47.9952 39.996L48.5496 38.6562L40.788 34.551H40.7814H40.788L49.533 33.726ZM41.58 21.0342L43.5864 20.5788L42.4776 18.843L42.603 18.7176L44.3322 19.8264L44.7942 17.82H44.8008H44.9724L45.4278 19.8198L47.1702 18.7176L47.2824 18.843L46.1802 20.5788L48.1866 21.0342V21.2058L46.1802 21.6612L47.2824 23.397L47.1702 23.5158L45.4146 22.4334L44.9724 24.4266H44.8008L44.3586 22.4334L42.603 23.5158L42.4776 23.397L43.5732 21.6612L41.5734 21.2058V21.0342H41.58Z" fill={iconColor} />
                    </svg>
                </Link>
            </div>
        </nav>
    )
}
