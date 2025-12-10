import { cn } from "@/lib/utils";

interface ResultDisplayProps {
  isCorrect: boolean;
  message: string;
  show: boolean;
}

export function ResultDisplay({ isCorrect, message, show }: ResultDisplayProps) {
  if (!show) return null;

  return (
    <div className={cn(
      "mt-6 p-4 rounded border-2 font-mono text-sm",
      isCorrect 
        ? "border-primary bg-primary/10 text-primary box-glow" 
        : "border-destructive bg-destructive/10 text-destructive error-glow"
    )}>
      <div className="flex items-start gap-3">
        <span className="text-2xl">{isCorrect ? "✓" : "✗"}</span>
        <div>
          <div className={cn(
            "font-bold mb-2",
            isCorrect ? "text-primary" : "text-destructive"
          )}>
            {isCorrect ? "SUCCESS!" : "OH NO..."}
          </div>
          <pre className="whitespace-pre-wrap text-foreground/80 leading-relaxed">
            {message}
          </pre>
        </div>
      </div>
    </div>
  );
}
