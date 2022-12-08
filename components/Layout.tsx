import { ReactNode } from "react";
import Head from 'next/head';
import Nav from "./Nav";
import localFont from "@next/font/local";

const arialNarrow = localFont({
    src: [
        {
            path: '../public/arialNarrow.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../public/arialNarrowBold.ttf',
            weight: '700',
            style: 'normal'
        }
    ]
})


export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className={arialNarrow.className}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="The COR Institute creates and funds sustainable ownership tools for artists" />
                <meta property="og:url" content="https://corinstitute.co" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Creator Ownership Research Institute" />
                <meta property="og:description" content="The COR Institute creates and funds sustainable ownership tools for artists" />
                <meta property="og:image" content="/public/TwitterBanner.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="corinstitute.co" />
                <meta name="twitter:title" content="Creator Ownership Research Institute" />
                <meta
                    name="twitter:description"
                    content="The COR Institute creates and funds sustainable ownership tools for artists"
                />
                <meta
                    name="twitter:image"
                    content="/public/TwitterBanner.png"
                />
                <title>The COR Institute creates and funds sustainable ownership tools for artists</title>
            </Head>
            <Nav />
            <main>{children}</main>
        </div>
    )
}
