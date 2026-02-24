export enum Fade {
  Down = "fade-down",
  Up = "fade-up",
}

export function getAnimationStyle(fade: Fade, index: number): React.CSSProperties {
  return {
    animationDelay: `${index * 100}ms`,
    animationDuration: "1s",
    animationName: fade,
    animationFillMode: "both",
  }
}
