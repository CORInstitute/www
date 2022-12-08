import { useContext } from "react";
import FullScreen, { FullScreenFlavor } from "../components/FullScreen";
import HeroText from "../components/HeroText";
import Text from "../components/Text";
import { ViewportContext } from "../providers/ViewportContextProvider";

export default function FAQ() {
  const { blueScreenRef, whiteScreenRef, blackScreenRef } =
    useContext(ViewportContext);
  return (
    <>
      <FullScreen flavor={FullScreenFlavor.BLUE} innerRef={blueScreenRef}>
        <HeroText flavor={FullScreenFlavor.BLUE}>
          FREQUENTLY ASKED QUESTIONS
        </HeroText>
      </FullScreen>
      <Text flavor={FullScreenFlavor.BLACK} innerRef={blackScreenRef}>
        <div>
          <h2>What are the goals of the CORI?</h2>
          <p>
            The CORI’s long term ambition is to create & govern sustainable tools
            and standards for protecting creator royalties in the NFT ecosystem.
          </p>
          <p>
            In the short-term, that ambition translates into the following
            tactical goals:
          </p>
          <ul>
            <li>
              Create a governing mechanism, inclusive to the creator community,
              for what is currently the most used tool for enforcing royalties —
              the Operator Filter.
            </li>
            <li>
              Incentivizing marketplaces that are currently dodging royalties to
              revert their positions and join this effort
            </li>
            <li>
              Aligning on a “v2” industry-wide standard (with associated tooling)
              for how creator royalties can be more sustainably preserved — with a
              goal of reaching that conclusion by the end of Q1 ‘23
            </li>
          </ul>

          <h2>
            What are criteria for inclusion or exclusion from the current Operator
            Filter Registry?
          </h2>

          <p>
            For a marketplace to be excluded from the Operator Filter Registry’s
            blocklist, the following criteria must be met:
          </p>
          <ul>
            <li>
              If a collection’s contract was deployed on or after January 2nd,
              2023 and the collection implements the canonical Operator Filter
              Registry’s blocklist, the marketplace respects 100% of the creator’s
              desired royalties
            </li>
            <li>
              If a collection’s contract was deployed before January 2nd, 2023,
              the marketplace respects 100% of the creator’s desired royalties
              irrespective of subscription to the Operator Filter Registry’s
              blocklist.
            </li>
          </ul>

          <p>
            Notably, marketplaces who default to honoring all royalty preferences
            regardless of blocklist policies are by default excluded under the
            above criteria.
          </p>

          <p>
            Starting January 2nd, 2023, this measurement will move to leverage the
            Royalty Registry’s on-chain creator royalty preferences as the source
            for creator royalty settings. Marketplaces must honor a royalty at
            least as high as the Royalty Registry’s advertised royalty in order to
            qualify for exclusion from the Operator Filter Registry. For clarity,
            any marketplace-specific settings should not override on-chain
            registry settings if they set them lower than what is on-chain.
          </p>

          <h2>How can I participate in this effort or get involved?</h2>

          <p>
            To start, we are working on devising an on-chain governance mechanism
            that allows for open participation from the community in adjudicating
            inclusion / exclusion of contracts from the Operator Filter.
          </p>

          <p>
            The registry’s current centralized ownership is a critical flaw that
            needs to be remedied as soon as possible. In particular, we are
            hopeful to have significant participation from the creator community
            in this governance body.
          </p>

          <p>
            Until that formal governance mechanism is established, the CORI forum
            (linked) will house all discussions on how to evolve industry towards
            an improved “v2” standard. It is open and encouraged for anyone to
            participate in the conversation.
          </p>
        </div>
      </Text>
    </>
  );
}
