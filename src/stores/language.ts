import { observable } from "mobx";

export const Languages = {
  fr: "fr",
  en: "en",
};

export class Language {
  @observable
  language: string = Languages.en;
}
