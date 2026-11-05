import { Turbine } from "./Fleetdata";


const STORAGE_KEY = "fieldlog-cards";

export function loadCards(): Turbine[] {
    try{
        const saved = localStorage.getItem(STORAGE_KEY);
        const cards = saved ? JSON.parse(saved) : null;

        return Array.isArray(cards) ? cards : null;
    }catch ( err ) {
        return null;
    }
};

export function saveCards( cards: Turbine[]) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
    }catch ( err ) {
        console.error("Error saving cards to localStorage:", err);
    }
}