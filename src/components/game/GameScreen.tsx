import { useState, useEffect, useCallback } from "react";
import { 
  shortcuts, 
  getShuffledOptions, 
  getRandomEmbarrassment, 
  getRandomSuccess,
  ShortcutData 
} from "@/data/shortcuts";
import { TerminalHeader } from "./TerminalHeader";
import { ScenarioCard } from "./ScenarioCard";
import { ShortcutButton } from "./ShortcutButton";
import { ResultDisplay } from "./ResultDisplay";
import { Button } from "@/components/ui/button";

type ButtonState = 'default' | 'correct' | 'wrong' | 'missed';

export function GameScreen() {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [round, setRound] = useState(1);
  const [currentScenario, setCurrentScenario] = useState<ShortcutData | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [buttonStates, setButtonStates] = useState<Record<string, ButtonState>>({});
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [resultMessage, setResultMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [lives, setLives] = useState(3);
  const [usedScenarios, setUsedScenarios] = useState<Set<string>>(new Set());

  const getNewScenario = useCallback(() => {
    const available = shortcuts.filter(s => !usedScenarios.has(s.app));
    if (available.length === 0) {
      setUsedScenarios(new Set());
      return shortcuts[Math.floor(Math.random() * shortcuts.length)];
    }
    return available[Math.floor(Math.random() * available.length)];
  }, [usedScenarios]);

  const startNewRound = useCallback(() => {
    const scenario = getNewScenario();
    setCurrentScenario(scenario);
    setUsedScenarios(prev => new Set([...prev, scenario.app]));
    setOptions(getShuffledOptions(scenario.shortcut));
    setButtonStates({});
    setSelectedAnswer(null);
    setResultMessage("");
  }, [getNewScenario]);

  useEffect(() => {
    startNewRound();
  }, []);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer || !currentScenario) return;
    
    setSelectedAnswer(answer);
    const correct = answer === currentScenario.shortcut;
    setIsCorrect(correct);

    const newButtonStates: Record<string, ButtonState> = {};
    options.forEach(opt => {
      if (opt === currentScenario.shortcut) {
        newButtonStates[opt] = 'correct';
      } else if (opt === answer) {
        newButtonStates[opt] = 'wrong';
      } else {
        newButtonStates[opt] = 'missed';
      }
    });
    setButtonStates(newButtonStates);

    if (correct) {
      const streakBonus = streak >= 2 ? streak : 0;
      setScore(prev => prev + 100 + streakBonus * 25);
      setStreak(prev => prev + 1);
      setResultMessage(getRandomSuccess());
    } else {
      setStreak(0);
      setLives(prev => prev - 1);
      setResultMessage(getRandomEmbarrassment(currentScenario.category));
      if (lives <= 1) {
        setGameOver(true);
      }
    }
  };

  const handleNextRound = () => {
    setRound(prev => prev + 1);
    startNewRound();
  };

  const handleRestart = () => {
    setScore(0);
    setStreak(0);
    setRound(1);
    setLives(3);
    setGameOver(false);
    setUsedScenarios(new Set());
    startNewRound();
  };

  if (!currentScenario) {
    return (
      <div className="text-center py-20">
        <div className="text-primary text-glow animate-pulse-glow">Loading...</div>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-8 box-glow">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">💀</div>
            <h2 className="text-3xl font-bold text-destructive mb-2">GAME OVER</h2>
            <p className="text-muted-foreground">
              Too many embarrassing messages sent...
            </p>
          </div>
          
          <div className="bg-muted/50 rounded p-6 mb-8 text-center">
            <div className="text-muted-foreground text-sm mb-2">FINAL SCORE</div>
            <div className="text-5xl font-bold text-primary text-glow">{score}</div>
            <div className="text-muted-foreground mt-2">
              {round - 1} rounds survived
            </div>
          </div>

          <Button 
            onClick={handleRestart}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-4"
          >
            TRY AGAIN
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-card border border-border rounded-lg p-6 relative overflow-hidden">
        <div className="absolute inset-0 crt-scanlines" />
        <div className="relative z-10">
          <TerminalHeader score={score} streak={streak} round={round} />
          
          {/* Lives indicator */}
          <div className="flex justify-center gap-2 mb-6">
            {[...Array(3)].map((_, i) => (
              <span 
                key={i} 
                className={i < lives ? "text-destructive text-2xl" : "text-muted text-2xl opacity-30"}
              >
                ❤️
              </span>
            ))}
          </div>

          <ScenarioCard scenario={currentScenario} isRevealed={!!selectedAnswer} />

          <div className="grid grid-cols-2 gap-3 mb-6">
            {options.map((option) => (
              <ShortcutButton
                key={option}
                shortcut={option}
                onClick={() => handleAnswer(option)}
                disabled={!!selectedAnswer}
                state={buttonStates[option] || 'default'}
              />
            ))}
          </div>

          <ResultDisplay 
            isCorrect={isCorrect} 
            message={resultMessage} 
            show={!!selectedAnswer}
          />

          {selectedAnswer && !gameOver && (
            <Button 
              onClick={handleNextRound}
              className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-4"
            >
              NEXT ROUND →
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
