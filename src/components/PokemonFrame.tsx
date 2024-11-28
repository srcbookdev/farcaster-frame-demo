interface PokemonFrameProps {
  pokemon: {
    name: string;
    image: string;
  };
  isRevealed: boolean;
}

const PokemonFrame = ({ pokemon, isRevealed }: PokemonFrameProps) => {
  return (
    <div className="relative w-full max-w-md aspect-[1.91/1] bg-slate-800 rounded-xl overflow-hidden">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className={`w-full h-full object-contain p-8 transition-all duration-500 ${
          isRevealed ? 'brightness-100' : 'brightness-0'
        }`}
      />
      
      {isRevealed && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4">
          <h2 className="text-2xl font-bold text-white capitalize">
            {pokemon.name}
          </h2>
        </div>
      )}
    </div>
  );
};

export default PokemonFrame;