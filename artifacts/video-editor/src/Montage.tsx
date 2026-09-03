import { AbsoluteFill, OffthreadVideo, Sequence, staticFile } from "remotion";

export type Fragment = {
  /** Filename under public/ */
  clip: string;
  /** Seconds into the source clip this fragment starts. */
  inPoint: number;
};

export type MontageProps = {
  fragments: Fragment[];
  /** Seconds each fragment holds. The reference sustained ~0.333s for nine seconds. */
  cutSeconds: number;
};

/** Near-monochrome with crushed blacks — no shot in the reference is bright or saturated. */
const GRADE = "grayscale(1) contrast(1.35) brightness(0.82)";

/**
 * Six sources cycling so no two adjacent fragments share a clip, with the in-point advancing
 * one second per pass so no fragment is ever reused.
 */
export const defaultFragments: Fragment[] = [
  ...[0, 1, 2, 3].flatMap((pass) =>
    [
      "broll-01-car-interior.mp4",
      "broll-04-cash-counter.mp4",
      "broll-06-supercar-wet-street.mp4",
      "broll-02-night-skyline.mp4",
      "broll-05-trading-screens.mp4",
      "broll-03-watch-macro.mp4",
    ].map((clip) => ({ clip, inPoint: pass })),
  ),
].slice(0, 21);

export const Montage: React.FC<MontageProps> = ({ fragments, cutSeconds }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {fragments.map((fragment, i) => (
        <Sequence
          key={`${fragment.clip}-${fragment.inPoint}-${i}`}
          from={Math.round(i * cutSeconds * 30)}
          durationInFrames={Math.round(cutSeconds * 30)}
        >
          <OffthreadVideo
            src={staticFile(fragment.clip)}
            startFrom={Math.round(fragment.inPoint * 30)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: GRADE,
            }}
          />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
