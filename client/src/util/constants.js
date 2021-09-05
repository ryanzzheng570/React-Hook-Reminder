import MakiIcon from "../component/Icon/MakiIcon";
import SpicyMakiIcon from "../component/Icon/SpicyMakiIcon";
import VegetarianIcon from "../component/Icon/VegetarianIcon";

export const serverAddress = 'http://localhost:5000';
export const HTTP_HEADER = { 'Content-type': 'application/json' };


//SUSHI Constants
export const MAKI_ROLLS = 'Maki Rolls';
export const CLASSIC_SPICY_MAKI = 'Classic Spicy Maki';
export const VEGETABLE_ROLL = 'Vegetable Roll';
export const SUSHI_PIZZA = 'Sushi Pizza';
export const TERIYAKI_MAKI_ROLL = 'Teriyaki Maki Roll (Cooked)';
export const ABURI_OSHI_SUSHI = 'Aburi Oshi Sushi';
export const MAKI_SUSHI_PARTY = 'Maki & Sushi Party';
export const SPECIAL_ROLL = 'Special Roll';

export const SUSHI_TYPES = [
    MAKI_ROLLS,
    CLASSIC_SPICY_MAKI,
    VEGETABLE_ROLL,
    SUSHI_PIZZA,
    TERIYAKI_MAKI_ROLL,
    ABURI_OSHI_SUSHI,
    MAKI_SUSHI_PARTY,
    SPECIAL_ROLL
];

export const SUSHI_TYPES_MAP = new Map([
    [MAKI_ROLLS, <MakiIcon />],
    [CLASSIC_SPICY_MAKI, <SpicyMakiIcon />],
    [VEGETABLE_ROLL, <VegetarianIcon />],
    [SUSHI_PIZZA, null],
    [TERIYAKI_MAKI_ROLL, null],
    [ABURI_OSHI_SUSHI, null],
    [MAKI_SUSHI_PARTY, null],
    [SPECIAL_ROLL, null]
]);