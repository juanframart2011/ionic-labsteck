import { Country } from "./country";

export interface State {
    id:      number;
    country: Country;
    code:    string;
    name:    string;
}