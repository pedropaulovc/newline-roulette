import { cn } from "@/lib/utils";

interface ShortcutButtonProps {
  shortcut: string;
  onClick: () => void;
  disabled: boolean;
  state: 'default' | 'correct' | 'wrong' | 'missed';
}

export function ShortcutButton({ shortcut, onClick, disabled, state }: ShortcutButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full py-4 px-6 rounded border-2 font-mono text-lg transition-all duration-200",
        "hover:scale-[1.02] active:scale-[0.98]",
        state === 'default' && "border-border bg-muted/30 text-foreground hover:border-primary hover:box-glow",
        state === 'correct' && "border-primary bg-primary/20 text-primary box-glow animate-pulse-glow",
        state === 'wrong' && "border-destructive bg-destructive/20 text-destructive error-glow animate-shake",
        state === 'missed' && "border-primary/50 bg-primary/10 text-primary/50",
        disabled && state === 'default' && "opacity-50 cursor-not-allowed hover:scale-100 hover:border-border"
      )}
    >
      <div className="flex items-center justify-center gap-3">
        <span className="text-muted-foreground text-sm">PRESS</span>
        <span className={cn(
          "font-bold tracking-wider",
          state === 'correct' && "text-glow",
          state === 'wrong' && "line-through"
        )}>
          {shortcut}
        </span>
      </div>
    </button>
  );
}
