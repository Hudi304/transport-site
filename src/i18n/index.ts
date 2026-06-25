import ro from "./ro";
import en from "./en";

const translations = { ro, en } as const;

export type Locale = keyof typeof translations;
export const defaultLocale: Locale = "ro";
export const locales: Locale[] = ["ro", "en"];

export function useTranslations(lang: Locale) {
	return translations[lang];
}
