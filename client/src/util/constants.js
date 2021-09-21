import MakiIcon from "../component/Icon/MakiIcon";
import PizzaIcon from "../component/Icon/PizzaIcon";
import SpicyMakiIcon from "../component/Icon/SpicyMakiIcon";
import VegetarianIcon from "../component/Icon/VegetarianIcon";
import TeriyakiIcon from "../component/Icon/TeriyakiIcon";
import AburiOshiIcon from "../component/Icon/AburiOshiIcon";
import PartyIcon from "../component/Icon/PartyIcon";
import SpecialIcon from "../component/Icon/SpecialIcon";

export const serverAddress = 'http://localhost:5000';
export const HTTP_HEADER = { 'Content-type': 'application/json' };

//DELIVERY METHOD
export const DELIVERY_PICK_UP = "PickUp";
export const DELIVERY_DELIVERY = "Delivery";

//ACCORDION SECTION 
export const ACCORDION_DELIVERY = 'delivery';
export const ACCORDION_CONTACTINFO = 'contact';
export const ACCORDION_PAYMENT = 'payment';
export const ACCORDION_SUMMARY = 'summary'

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
    [SUSHI_PIZZA, <PizzaIcon />],
    [TERIYAKI_MAKI_ROLL, <TeriyakiIcon />],
    [ABURI_OSHI_SUSHI, <AburiOshiIcon />],
    [MAKI_SUSHI_PARTY, <PartyIcon />],
    [SPECIAL_ROLL, <SpecialIcon />]
]);