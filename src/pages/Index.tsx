import { useState, useEffect } from "react";
import { StartScreen } from "@/components/game/StartScreen";
import { GameScreen } from "@/components/game/GameScreen";

const Index = () => {
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const handleKeyPress = () => {
      if (!gameStarted) {
        setGameStarted(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted]);

  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <header className="text-center mb-8">
        <h1 className="sr-only">Newline Roulette - A Keyboard Shortcut Game</h1>
      </header>
      
      {gameStarted ? (
        <GameScreen />
      ) : (
        <StartScreen onStart={() => setGameStarted(true)} />
      )}

      <footer className="text-center mt-12 text-muted-foreground text-xs">
        <p>
          Made with 💚 and existential dread about keyboard shortcuts
        </p>
      </footer>
    </main>
  );
};

export default Index;
