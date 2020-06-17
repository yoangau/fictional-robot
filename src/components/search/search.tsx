import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { LanguageMap } from "../../language/languages";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../language/language.slice";

export const SearchLanguage: LanguageMap<string> = {
  fr: "Rechercher",
  en: "Search",
};

export const Search = () => {
  const language = useSelector(selectLanguage);

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder={SearchLanguage[language]}
        className="mr-sm-2"
      />
      <Button variant="outline-dark">{SearchLanguage[language]}</Button>
    </Form>
  );
};
