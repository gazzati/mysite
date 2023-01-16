import { createContext } from "react";

import { Locale, LocaleTitle } from "@interfaces/locales";

export default {
  home: {
    start: {
      welcome: {
        [Locale.En]: "Hi, my name is",
        [Locale.Ru]: "Привет, меня зовут",
        [Locale.Os]: "Байрай, мæ ном хуыйны",
      },
      name: {
        [Locale.En]: "Gazzaev Timur.",
        [Locale.Ru]: "Газзаев Тимур.",
        [Locale.Os]: "Гæззаты Тимур.",
      },
      title: {
        [Locale.En]: "I'm a software engineer.",
        [Locale.Ru]: "Я инженер-разработчик.",
        [Locale.Os]: "Инженер-разработчик.",
      },
      description: {
        [Locale.En]:
          "Specialized in web application development. \nCurrently, I'm focused on backend and VoIP development.",
        [Locale.Ru]:
          "Cпециализируюсь на web разработке. \nСейчас я сосредоточен на backend и VoIP разработке.",
        [Locale.Os]:
          "Кусын web разработчикæй. \nНыр æз аразын backend ӕмӕ VoIP программатӕ.",
      },
    },
  },
};

export const getLocaleTitle = (locale: Locale): LocaleTitle => {
  switch (locale) {
    case Locale.Ru:
      return LocaleTitle.Russian;
    case Locale.Os:
      return LocaleTitle.Iron;
    default:
      return LocaleTitle.English;
  }
};

export const getNextLocale = (locale: Locale): Locale => {
  switch (locale) {
    case Locale.En:
      return Locale.Ru;
    case Locale.Ru:
      return Locale.Os;
    default:
      return Locale.En;
  }
};

export const LocaleContext = createContext(Locale.En);
export { Locale };
