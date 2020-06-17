import { LanguageMap } from "../../language/languages";

export default interface Article {
  title: LanguageMap<string>;
  description: LanguageMap<string>;
  img: string;
  text: LanguageMap<JSX.Element>;
  date: Date;
}
