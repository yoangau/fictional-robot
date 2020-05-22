import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { LanguageMap } from "../../interfaces/language-map.interface.";

export const SearchLanguage: LanguageMap = {
  fr: "Rechercher",
  en: "Search",
};

export const Search = ({language}: { language: string; }) => {
  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder={SearchLanguage[language]}
        className="mr-sm-2"
      />
      <Button variant="outline-info">{SearchLanguage[language]}</Button>
    </Form>
  );
};
