import { ReactNode } from "react";
import Head from 'next/head';
import Nav from "./Nav";


export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="iewport" content="initial-scale=1.0, width=device-width" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="" />
                <meta name="twitter:title" content="Creator Ownership Research Institute" />
                <meta
                    name="twitter:description"
                    content="The COR Institute creates and funds sustainable ownership tools for artists"
                />
                <meta
                    name="twitter:image"
                    content="/public/TwitterBanner.png"
                />
            </Head>
            <Nav />
            <main>{children}</main>
        </>
    )
}