import type { PokemonType } from "../types/Pokemon";

const types: PokemonType[] = ["All", "Fire", "Water", "Grass", "Electric", "Normal"];

interface FilterProps {
    activeType: PokemonType
    setActiveType: (type: PokemonType) => void
}


function FilterBar({ activeType, setActiveType }: FilterProps) {


    return (
        <div className="filter-container">
            {types.map((type) => (
                <button
                    key={type}
                    className={`filter-btn ${activeType === type ? "active" : ""} ${type.toLowerCase()}`}
                    onClick={() => setActiveType(type)}
                >
                    {type}
                </button>
            ))}
        </div>
    )
}

export default FilterBar