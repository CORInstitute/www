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
    </>
  )
}