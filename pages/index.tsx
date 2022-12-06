import Head from 'next/head'
import Image from 'next/image'
import FullScreen, { FullScreenFlavor } from '../components/FullScreen'
import HeroText from '../components/HeroText'

export default function Home() {
  return (
    <FullScreen flavor={FullScreenFlavor.BLUE}>
      <HeroText flavor={FullScreenFlavor.BLUE}>
        CREATOR OWNERSHIP RESEARCH INSTITUTE
      </HeroText>
    </FullScreen>
  )
}