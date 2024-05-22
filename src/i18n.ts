import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          voiceMenu1: "Voice menu 1",
          voiceMenu2: "Voice menu 2",
          voiceMenu3: "Voice menu 3",
          formTitle: 'Titolo form',
          firstName: 'Nome',
          lastName: 'Cognome',
          phone: 'Telefono',
          email: 'Email',
          sendButtonLabel: 'Send',
          emailRequiredError: 'Email is required',
          firstNameRequiredError: 'First Name is required',
          lastNameRequiredError: 'Last Name is required',
        }
      },
      it: {
        translation: {
          voiceMenu1: "Voce menu 1",
          voiceMenu2: "Voce menu 2",
          voiceMenu3: "Voce menu 3",
          formTitle: 'Form Title',
          firstName: 'First Name',
          lastName: 'Last Name',
          phone: 'Phone',
          email: 'Email',
          sendButtonLabel: 'Invia',
          emailRequiredError: 'Email is required',
          firstNameRequiredError: 'First Name is required',
          lastNameRequiredError: 'Last Name is required',
        }
      }
    }
  });

export default i18n;