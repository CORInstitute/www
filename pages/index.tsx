import { useContext } from 'react'
import FullScreen, { FullScreenFlavor } from '../components/FullScreen'
import HeroText from '../components/HeroText'
import { ViewportContext } from '../providers/ViewportContextProvider'

export default function Home() {
  const { blueScreenRef, whiteScreenRef, blackScreenRef } = useContext(ViewportContext)
  return (
    <>
      <FullScreen flavor={FullScreenFlavor.BLUE} innerRef={blueScreenRef}>
        <HeroText flavor={FullScreenFlavor.BLUE}>
          CREATOR OWNERSHIP RESEARCH INSTITUTE
        </HeroText>
      </FullScreen>
      <FullScreen flavor={FullScreenFlavor.WHITE} innerRef={whiteScreenRef}>
        <HeroText flavor={FullScreenFlavor.WHITE}>
          CORI creates and funds sustainable ownership tools for creators
        </HeroText>
      </FullScreen>
      <FullScreen flavor={FullScreenFlavor.BLACK} innerRef={blackScreenRef}>
        <p>The COR Institute is a cooperative effort originally created by ZORA, OpenSea, Manifold,  Foundation, SuperRare, and Nifty Gateway.</p>
        <p>Our charter is to fund and create improved mechanisms for creator ownership tooling, and provide transparent governance of those tools.</p>
        <p>We emphatically welcome new members to join us.</p>
        <p>Twitter   Github   Discourse</p>
      </FullScreen>
    </>
  )
}