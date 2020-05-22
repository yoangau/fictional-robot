import Dictionnary from "../interfaces/dictionnary";

export const Languages: Dictionnary<string> = {
  fr: "fr",
  en: "en",
};

export interface LanguageState {
  language: string;
  changeLanguage: React.Dispatch<React.SetStateAction<string>>;
}
