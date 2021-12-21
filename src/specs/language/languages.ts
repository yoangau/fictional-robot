import Dictionnary from '../../components/general/dictionnary.interface';
export type Language = 'fr' | 'en';
export const Languages: Array<Language> = ['fr', 'en'];
export interface LanguageMap<T> extends Dictionnary<T> {
  fr: T;
  en: T;
}

export const languageChoices: LanguageMap<string> = {
  fr: 'Français',
  en: 'English',
};
