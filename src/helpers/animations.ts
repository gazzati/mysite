export enum Fade {
  Down = "fade-down",
  Up = "fade-up",
}

export class Animation {
  private fade;
  private queue;

  constructor(fade: Fade, startWith = 1) {
    this.fade = fade;
    this.queue = new Array(10).fill(0).map((_, index) => index + startWith);
  }

  getDuration() {
    const duration = this.queue.shift();
    return {
      animationDelay: `${(duration || 0) * 100}ms`,
      animationDuration: "1s",
      animationName: this.fade,
      animationFillMode: "both",
    };
  }
}
