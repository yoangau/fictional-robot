import { observable } from "mobx-react"

export const Languages = {
    fr: 'fr',
    en: 'en'
}

export class Language {
    @observable
    language = Languages.en
}