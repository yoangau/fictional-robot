import Dictionnary from "../general/dictionnary.interface";
export type Language = "fr" | "en";
export const Languages: Language[] = ["fr", "en"];
export interface LanguageMap<T> extends Dictionnary<T> {
  fr: T;
  en: T;
}
