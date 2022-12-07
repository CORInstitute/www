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
        <p>The COR Institute is a cooperative effort originally created by <a href="https://zora.co" target="_blank" rel="noopener noreferrer">ZORA</a>, <a href="https://opensea.io" target="_blank" rel="noopener noreferrer">OpenSea</a>, <a href="https://manifold.xyz/" target="_blank" rel="noopener noreferrer">Manifold</a>,  <a href="https://foundation.app/" target="_blank" rel="noopener noreferrer">Foundation</a>, <a href="https://superrare.com/" target="_blank" rel="noopener noreferrer">SuperRare</a>, and <a href="https://www.niftygateway.com/" target="_blank" rel="noopener noreferrer">Nifty Gateway</a>.</p>
        <p>Our charter is to fund and create improved mechanisms for creator ownership tooling, and provide transparent governance of those tools.</p>
        <p>We emphatically welcome new members to join us.</p>
        <p>Twitter&nbsp;&nbsp;&nbsp;<a href="https://github.com/CORInstitute" target="_blank" rel="noopener noreferrer">Github</a>&nbsp;&nbsp;&nbsp;Discourse</p>

      </FullScreen>
    </>
  )
}