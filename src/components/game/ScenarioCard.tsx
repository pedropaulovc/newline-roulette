import { ShortcutData } from "@/data/shortcuts";

interface ScenarioCardProps {
  scenario: ShortcutData;
  isRevealed: boolean;
}

export function ScenarioCard({ scenario, isRevealed }: ScenarioCardProps) {
  const categoryIcons: Record<string, string> = {
    cli: "⌨️",
    web: "🌐",
    chat: "💬",
    dev: "🛠️"
  };

  return (
    <div className="mb-8">
      <div className="text-muted-foreground text-sm mb-2 flex items-center gap-2">
        <span>{categoryIcons[scenario.category]}</span>
        <span className="uppercase tracking-wider">SCENARIO</span>
      </div>
      <div className="bg-muted/50 border border-border rounded p-6 box-glow">
        <div className="text-xl mb-4">
          <span className="text-primary">$</span>{" "}
          <span className="text-foreground">You're typing in </span>
          <span className="text-accent text-glow font-bold">{scenario.app}</span>
        </div>
        <div className="text-muted-foreground text-sm leading-relaxed">
          You need to add a newline without sending your message early.
          <br />
          <span className="text-primary/70">Choose wisely, or suffer public humiliation...</span>
        </div>
        {isRevealed && (
          <div className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
            <span className="text-primary">💡 TIP:</span> {scenario.notes}
          </div>
        )}
      </div>
    </div>
  );
}
