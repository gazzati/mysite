import age from "@helpers/age"

import { Locale, LocaleTitle } from "@interfaces/locales"

export default {
  links: {
    about: {
      [Locale.En]: "About",
      [Locale.Ru]: "Обо мне",
      [Locale.Os]: "Мӕн тыххӕй"
    },
    projects: {
      [Locale.En]: "Projects",
      [Locale.Ru]: "Проекты",
      [Locale.Os]: "Проекттӕ"
    },
    resume: {
      [Locale.En]: "Resume",
      [Locale.Ru]: "Резюме",
      [Locale.Os]: "Резюме"
    }
  },
  start: {
    welcome: {
      [Locale.En]: "Hi, my name is",
      [Locale.Ru]: "Привет, меня зовут",
      [Locale.Os]: "Байрай, æз дæн"
    },
    name: {
      [Locale.En]: "Gazzaev Timur.",
      [Locale.Ru]: "Газзаев Тимур.",
      [Locale.Os]: "Гæззаты Тимур."
    },
    title: {
      [Locale.En]: "I'm a software engineer.",
      [Locale.Ru]: "Я инженер-разработчик.",
      [Locale.Os]: "Инженер-аразӕг."
    },
    description: {
      [Locale.En]:
        "Specialized in web application development. \nCurrently, I'm focused on backend and VoIP development.",
      [Locale.Ru]: "Cпециализируюсь на web разработке. \nСейчас я сосредоточен на backend и VoIP разработке.",
      [Locale.Os]: "Программистӕй кусын. \nНыр æз аразын backend ӕмӕ VoIP программатӕ."
    }
  },
  about: {
    heading: {
      [Locale.En]: "About Me",
      [Locale.Ru]: "Обо мне",
      [Locale.Os]: "Мӕн тыххӕй"
    },
    start: {
      [Locale.En]: `I am ${age}. I was born in the Republic of North Ossetia-Alania.`,
      [Locale.Ru]: `Мне ${age}. Я родился в Республике Северная Осетия-Алания.`,
      [Locale.Os]: `Мӕныл цӕуы ${age} азы. Ӕз райгуырдтӕн Ирыстоны.`
    },
    hobby: {
      [Locale.En]:
        "From an early age I was interested in electronics. Helped me develop in this area my school - RFMLI.",
      [Locale.Ru]:
        "С малых лет я интересовался электроникой. Развиваться в этой области мне помогала моя школа - РФМЛИ.",
      [Locale.Os]: "Гыццылӕй мӕ зӕрдӕмӕ электроника цыди. Ацы къабазы рӕзынӕн мын ӕххуыс кодта ме скъола - РФМЛИ."
    },
    bio: {
      [Locale.En]:
        "At the age of 11 I soldered my first PCB. And at 16, I first started programming Arduino controllers.",
      [Locale.Ru]:
        "В 11 лет я спаял свою первую печатную плату. А в 16 впервые занялся программированием контроллеров Arduino.",
      [Locale.Os]:
        "11 азы мыл куы цыд, уӕд ӕз мӕ фыццаг плата æхсидтӕн. 16 та фыццаг хатт бавнӕлдтон Arduino контролерты программӕмӕ."
    },
    fakeBio: {
      [Locale.En]: "A year later, I assembled my first engine, and at 20 I introduced the Iron Man suit to the world.",
      [Locale.Ru]: "Через год я собрал свой первый двигатель, а в 20 представил миру костюм железного человека.",
      [Locale.Os]:
        "Афӕдзы фӕстӕ ӕрӕмбырд кодтон мӕ фыццаг змӕлӕг, 20 та дунейӕн мӕ цӕстытыл ауайын кодтон Æфсӕйнаг Aдӕймаджы костюм."
    },
    bioContinue: {
      [Locale.En]: "A year later, I entered the RTU MIREA and diligently engaged in web development",
      [Locale.Ru]: "Через год я поступил в РТУ МИРЭА и усердно занялся web разработкой.",
      [Locale.Os]: "Афӕдзы фӕстӕ РТУ МИРЭАмæ бацыдтӕн ӕмӕ зӕрдиагӕй бавнӕлдтон web разработкамӕ."
    },
    end: {
      [Locale.En]:
        "Since then, I have been involved in everything from landing page layout to microservice architecture design. One thing I know for sure: I love it.",
      [Locale.Ru]:
        "С тех пор я занимался от верстки лендингов до проектирования микросервисной архитектуры. Одно знаю точно: мне это нравится.",
      [Locale.Os]:
        "Уӕдӕй фӕстӕмӕ куыстон ленингты версткӕйӕ микросервисон архитектурӕйы проекты онг. Иу хъуыддаг зонын бӕлвырдӕй: мӕ зӕрдӕмӕ цӕуы."
    }
  },
  projects: {
    heading: {
      [Locale.En]: "My projects",
      [Locale.Ru]: "Мои проекты",
      [Locale.Os]: "Мои проекттӕ"
    },
    talker: {
      [Locale.En]:
        "Voice anonymous chat. The system randomly connects users to a call. Supported on mobile and desktop browsers. \n\nIn the future, algorithms for selecting by city, age and gender will be added.",
      [Locale.Ru]:
        "Голосовой анонимный чат. Система случайным образом соединяет пользователей в звонок. Поддерживается на мобильных и десктопных браузерах. \n\nВ будущем планируется добавление алгоритмов подбора по городу, возрасту и полу.",
      [Locale.Os]:
        "Голосовой анонимный чат. Система случайным образом соединяет пользователей в звонок. Поддерживается на мобильных и десктопных браузерах.\n\nВ будущем планируется добавление алгоритмов подбора по городу, возрасту и полу."
    },
    dzera: {
      [Locale.En]:
        "Smart AI assistant. Telegram is used as an interface for interaction. \nPowered by OpenAI gpt4.0 kernel. \n\nAdded function for saving dialog context.",
      [Locale.Ru]:
        "Умный AI ассистент. В качестве интерфейса для взаимодействия используется Telegram. \nРаботает на основе ядра OpenAI gpt4.0. \n\nДобавлена функция сохранения контекста диалога.",
      [Locale.Os]:
        "Умный AI ассистент. В качестве интерфейса для взаимодействия используется Telegram. \nРаботает на основе ядра OpenAI gpt4.0. \n\nДобавлена функция сохранения контекста диалога."
    },
    fidar: {
      [Locale.En]:
        "High-speed anonymous VPN with unlimited traffic, built on Wireguard technology. \nIt is possible to select the country of the VPN server.",
      [Locale.Ru]:
        "Высокоскоростной анонимный VPN с безлимтным трафиком, построенный на основе технологии Wireguard. \nЕсть возможность выбора страны VPN сервера.",
      [Locale.Os]:
        "Высокоскоростной анонимный VPN с безлимтным трафиком, построенный на основе технологии Wireguard. \nЕсть возможность выбора страны VPN сервера."
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

export { useDictionary, default as Dictionary } from "@gazzati/react-dictionary"
