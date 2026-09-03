import { Composition, Sequence, AbsoluteFill } from "remotion";
import { MoneyCounter, moneyCounterDefaults } from "./MoneyCounter";
import { Montage, defaultFragments } from "./Montage";

const FPS = 30;
const W = 1080;
const H = 1920;

/** Measured off the reference: counter ends, music drops and the first cut all land here. */
const DROP_SECONDS = 8;
const CUT_SECONDS = 1 / 3;
const TOTAL_SECONDS = 15;

const ViralClip: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#000000" }}>
    <Sequence durationInFrames={DROP_SECONDS * FPS}>
      <MoneyCounter {...moneyCounterDefaults} />
    </Sequence>
    <Sequence from={DROP_SECONDS * FPS}>
      <Montage fragments={defaultFragments} cutSeconds={CUT_SECONDS} />
    </Sequence>
  </AbsoluteFill>
);

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Renders with no source footage — pure black and type. */}
      <Composition
        id="MoneyCounter"
        component={MoneyCounter}
        durationInFrames={DROP_SECONDS * FPS}
        fps={FPS}
        width={W}
        height={H}
        defaultProps={moneyCounterDefaults}
      />
      {/* Needs the six b-roll clips in public/. */}
      <Composition
        id="ViralClip"
        component={ViralClip}
        durationInFrames={TOTAL_SECONDS * FPS}
        fps={FPS}
        width={W}
        height={H}
      />
    </>
  );
};
