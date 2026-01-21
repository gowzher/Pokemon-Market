import type { PokemonType } from "../types/Pokemon";
import "../css/filterBar.css"
import { setActiveType } from "../redux/activeSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const types: PokemonType[] = ["All", "Fire", "Water", "Grass", "Electric", "Normal"];



function FilterBar() {

    const dispatch = useDispatch();
    const activeType = useSelector((state: RootState) => state.active.activeType);

    return (
        <div className="filter-container">
            {types.map((type) => (
                <button
                    key={type}
                    className={`filter-btn ${activeType === type ? "active" : ""} ${type.toLowerCase()}`}
                    onClick={() => dispatch(setActiveType(type))}
                >
                    {type}
                </button>
            ))}
        </div>
    )
}

export default FilterBar