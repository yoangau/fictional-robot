import { LanguageMap } from "./language-map.interface.";

export default interface Article {
  title: LanguageMap;
  description: LanguageMap;
  img: string;
  text: LanguageMap;
  date: Date;
}
