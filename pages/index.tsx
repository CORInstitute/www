import FullScreen, { FullScreenFlavor } from '../components/FullScreen'
import HeroText from '../components/HeroText'

export default function Home() {
  return (
    <>
      <FullScreen flavor={FullScreenFlavor.BLUE}>
        <HeroText flavor={FullScreenFlavor.BLUE}>
          CREATOR OWNERSHIP RESEARCH INSTITUTE
        </HeroText>
      </FullScreen>
      <FullScreen flavor={FullScreenFlavor.WHITE}>
        <HeroText flavor={FullScreenFlavor.WHITE}>
          CORI creates and funds sustainable ownership tools for creators
        </HeroText>
      </FullScreen>
    </>
  )
}