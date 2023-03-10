import { createContext } from "react"

import { Locale, LocaleTitle } from "@interfaces/locales"

export default {
  links: {
    about: {
      [Locale.En]: "About",
      [Locale.Ru]: "Обо мне",
      [Locale.Os]: "Обо мне"
    },
    resume: {
      [Locale.En]: "Resume",
      [Locale.Ru]: "Резюме",
      [Locale.Os]: "Резюме"
    }
  },
  home: {
    start: {
      welcome: {
        [Locale.En]: "Hi, my name is",
        [Locale.Ru]: "Привет, меня зовут",
        [Locale.Os]: "Байрай, мæ ном хуыйны"
      },
      name: {
        [Locale.En]: "Gazzaev Timur.",
        [Locale.Ru]: "Газзаев Тимур.",
        [Locale.Os]: "Гæззаты Тимур."
      },
      title: {
        [Locale.En]: "I'm a software engineer.",
        [Locale.Ru]: "Я инженер-разработчик.",
        [Locale.Os]: "Инженер-разработчик."
      },
      description: {
        [Locale.En]:
          "Specialized in web application development. \nCurrently, I'm focused on backend and VoIP development.",
        [Locale.Ru]: "Cпециализируюсь на web разработке. \nСейчас я сосредоточен на backend и VoIP разработке.",
        [Locale.Os]: "Кусын web разработчикæй. \nНыр æз аразын backend ӕмӕ VoIP программатӕ."
      }
    },
    about: {
      heading: {
        [Locale.En]: "About Me",
        [Locale.Ru]: "Обо мне",
        [Locale.Os]: "Обо мне"
      },
      start: {
        [Locale.En]: "I am 23. I was born in the Republic of North Ossetia-Alania.",
        [Locale.Ru]: "Мне 23. Я родился в Республике Северная Осетия-Алания.",
        [Locale.Os]: "Мне 23. Я родился в Республике Северная Осетия-Алания."
      },
      hobby: {
        [Locale.En]: "From an early age I was interested in electronics. Helped me develop in this area my school - ",
        [Locale.Ru]: "С малых лет я интересовался электроникой. Развиваться в этой области мне помогала моя школа - ",
        [Locale.Os]: "С малых лет я интересовался электроникой. Развиваться в этой области мне помогала моя школа - "
      },
      school: {
        [Locale.En]: "RFMLI",
        [Locale.Ru]: "РФМЛИ",
        [Locale.Os]: "РФМЛИ"
      },
      bio: {
        [Locale.En]:
          "At the age of 11 I soldered my first PCB. And at 16, I first started programming Arduino controllers.",
        [Locale.Ru]:
          "В 11 лет я спаял свою первую печатную плату. А в 16 впервые занялся программированием контроллеров Arduino.",
        [Locale.Os]:
          "В 11 лет я спаял свою первую печатную плату. А в 16 впервые занялся программированием контроллеров Arduino."
      },
      fakeBio: {
        [Locale.En]:
          "A year later, I assembled my first engine, and at 20 I introduced the Iron Man suit to the world.",
        [Locale.Ru]: "Через год я собрал свой первый двигатель, а в 20 представил миру костюм железного человека.",
        [Locale.Os]: "Через год я собрал свой первый двигатель, а в 20 представил миру костюм железного человека."
      },
      bioContinue: {
        [Locale.En]: "A year later, I entered the university and diligently engaged in web development",
        [Locale.Ru]: "Через год я поступил в университет и усердно занялся web разработкой.",
        [Locale.Os]: "Через год я поступил в университет и усердно занялся web разработкой."
      },
      end: {
        [Locale.En]:
          "Since then, I have been involved in everything from landing page layout to microservice architecture design. One thing I know for sure: I love it.",
        [Locale.Ru]:
          "С тех пор я занимался от верстки лендингов до проектирования микросервисной архитектуры. Одно знаю точно: мне это нравится.",
        [Locale.Os]:
          "С тех пор я занимался от верстки лендингов до проектирования микросервисной архитектуры. Одно знаю точно: мне это нравится."
      }
    },
    contacts: {
      heading: {
        [Locale.En]: "Contact me. \nI am always online.",
        [Locale.Ru]: "Контакты для связи со мной. \nЯ всегда доступен.",
        [Locale.Os]: "Контакты для связи со мной. \nЯ всегда доступен."
      }
    }
  }
}

export const getLocaleTitle = (locale: Locale): LocaleTitle => {
  switch (locale) {
    case Locale.Ru:
      return LocaleTitle.Russian
    case Locale.Os:
      return LocaleTitle.Iron
    default:
      return LocaleTitle.English
  }
}

export const getNextLocale = (locale: Locale): Locale => {
  switch (locale) {
    case Locale.En:
      return Locale.Ru
    // case Locale.Ru:
    //   return Locale.Os
    default:
      return Locale.En
  }
}

export const LocaleContext = createContext(Locale.En)
export { Locale }
