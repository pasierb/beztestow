import { DATETIME_LOCALE } from "../config";

export const formatDate = (date: Date): string => date.toLocaleDateString(DATETIME_LOCALE, {
    year: "numeric",
    month: "short",
    day: "numeric",
});
