import { Button } from "@/components/ui/button";

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-card border border-border rounded-lg p-8 relative overflow-hidden box-glow">
        <div className="absolute inset-0 crt-scanlines" />
        <div className="relative z-10">
          {/* ASCII Art Title */}
          <pre className="text-primary text-glow text-xs sm:text-sm mb-6 font-mono leading-tight overflow-x-auto">
{`
 _   _                _ _            
| \\ | | _____      __| (_)_ __   ___ 
|  \\| |/ _ \\ \\ /\\ / /| | | '_ \\ / _ \\
| |\\  |  __/\\ V  V / | | | | | |  __/
|_| \\_|\\___| \\_/\\_/  |_|_|_| |_|\\___|
     ____             _      _   _       
    |  _ \\ ___  _   _| | ___| |_| |_ ___ 
    | |_) / _ \\| | | | |/ _ \\ __| __/ _ \\
    |  _ < (_) | |_| | |  __/ |_| ||  __/
    |_| \\_\\___/ \\__,_|_|\\___|\\__|\\__\\___|
`}
          </pre>

          <div className="text-muted-foreground text-lg mb-8 leading-relaxed">
            <p className="mb-4">
              Every app has a different keyboard shortcut for newlines.
            </p>
            <p className="text-accent text-glow">
              Get it wrong, and you'll send half a sentence to your boss, your ex, or worse... production.
            </p>
          </div>

          <div className="bg-muted/50 border border-border rounded p-4 mb-8 text-left">
            <div className="text-primary text-sm mb-3">HOW TO PLAY:</div>
            <ul className="text-muted-foreground text-sm space-y-2">
              <li>
                <span className="text-primary">→</span> You'll see an app/context
              </li>
              <li>
                <span className="text-primary">→</span> Choose the correct newline shortcut
              </li>
              <li>
                <span className="text-primary">→</span> Wrong answers = embarrassing sends
              </li>
              <li>
                <span className="text-primary">→</span> 3 strikes and you're out!
              </li>
            </ul>
          </div>

          <div className="flex gap-3 text-sm text-muted-foreground mb-8 justify-center flex-wrap">
            <span className="px-2 py-1 bg-muted rounded">Shift + Enter</span>
            <span className="px-2 py-1 bg-muted rounded">Ctrl + J</span>
            <span className="px-2 py-1 bg-muted rounded">\ + Enter</span>
            <span className="px-2 py-1 bg-muted rounded">???</span>
          </div>

          <Button 
            onClick={onStart}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-12 py-6 text-lg box-glow"
          >
            START GAME
          </Button>

          <div className="mt-6 text-muted-foreground text-xs">
            Press any key to start<span className="animate-blink">_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
