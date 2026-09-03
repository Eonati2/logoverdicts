import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";

export type MoneyCounterProps = {
  /** Round figure the counter is visibly heading toward but never reaches. */
  target: number;
  /** Seconds the counter *would* need to reach `target`. */
  secondsToTarget: number;
  /** Grey, never white — white glares on black and flattens the drop that follows. */
  color: string;
};

export const moneyCounterDefaults: MoneyCounterProps = {
  target: 1_000_000,
  secondsToTarget: 9.5,
  color: "#B4B4B4",
};

/**
 * Act one of the format: a black frame and one climbing figure.
 *
 * The rate is derived from `target / secondsToTarget` rather than set directly, because the
 * whole retention mechanic depends on the number being on a visible trajectory toward a round
 * figure it never lands on. In the reference this was $105,263/s aimed at $1,000,000 at 9.47s,
 * with the video cutting away at 8.0s.
 */
export const MoneyCounter: React.FC<MoneyCounterProps> = ({
  target,
  secondsToTarget,
  color,
}) => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const perSecond = target / secondsToTarget;
  const value = Math.floor((perSecond * frame) / fps);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          // Sits just above centre, as measured off the reference frames.
          transform: "translateY(-6%)",
          color,
          fontFamily:
            "'Helvetica Neue', Helvetica, 'Liberation Sans', Arial, sans-serif",
          fontSize: width * 0.155,
          fontWeight: 500,
          letterSpacing: "-0.01em",
          fontVariantNumeric: "tabular-nums",
          whiteSpace: "nowrap",
        }}
      >
        $ {value.toLocaleString("en-US")}
      </div>
    </AbsoluteFill>
  );
};
