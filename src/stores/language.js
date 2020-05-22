import { observable } from "mobx"

export const Languages = {
    fr: 'fr',
    en: 'en'
}

export class Language {

    language = observable.box(Languages.en)
}