import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import Dictionnary from "../../interfaces/dictionnary";

export const SearchLanguage: Dictionnary<string> = {
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
