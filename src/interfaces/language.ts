import React from "react";

export const Languages = {
  fr: "fr",
  en: "en",
};

export interface LanguageState {
  language: string;
  changeLanguage: React.Dispatch<React.SetStateAction<string>>;
}
