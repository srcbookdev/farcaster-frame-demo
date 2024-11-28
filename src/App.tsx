import { useState, useEffect } from 'react';
import { CircleSlash2, RefreshCw } from 'lucide-react';
import PokemonFrame from './components/PokemonFrame';
import { getRandomPokemon } from './utils/pokemon';
import './index.css';

function App() {
  const [pokemon, setPokemon] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRevealed, setIsRevealed] = useState(false);

  const loadNewPokemon = async () => {
    setIsLoading(true);
    setIsRevealed(false);
    const newPokemon = await getRandomPokemon();
    setPokemon(newPokemon);
    setIsLoading(false);
  };

  useEffect(() => {
    loadNewPokemon();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <CircleSlash2 className="w-8 h-8 animate-spin text-white" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-slate-900 p-4">
      <PokemonFrame 
        pokemon={pokemon} 
        isRevealed={isRevealed} 
      />
      
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => setIsRevealed(true)}
          className={`px-6 py-3 rounded-lg text-white font-semibold transition-all ${
            isRevealed 
              ? 'bg-slate-700 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={isRevealed}
        >
          {isRevealed ? "It's revealed!" : "Who's that Pokémon?"}
        </button>

        {isRevealed && (
          <button
            onClick={loadNewPokemon}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold"
          >
            <RefreshCw className="w-4 h-4" />
            Play Again
          </button>
        )}
      </div>
    </div>
  );
}

export default App;