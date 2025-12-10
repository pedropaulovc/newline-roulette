interface TerminalHeaderProps {
  score: number;
  streak: number;
  round: number;
}

export function TerminalHeader({ score, streak, round }: TerminalHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <div className="w-3 h-3 rounded-full bg-accent" />
          <div className="w-3 h-3 rounded-full bg-primary" />
        </div>
        <span className="text-muted-foreground text-sm ml-2">newline_roulette.exe</span>
      </div>
      <div className="flex gap-6 text-sm">
        <div>
          <span className="text-muted-foreground">SCORE:</span>{" "}
          <span className="text-primary text-glow">{score}</span>
        </div>
        <div>
          <span className="text-muted-foreground">STREAK:</span>{" "}
          <span className={streak >= 3 ? "text-accent text-glow" : "text-primary"}>
            {streak}🔥
          </span>
        </div>
        <div>
          <span className="text-muted-foreground">ROUND:</span>{" "}
          <span className="text-primary">{round}</span>
        </div>
      </div>
    </div>
  );
}
