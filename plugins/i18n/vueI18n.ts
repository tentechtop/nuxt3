import en from "../../locales/en.js";
import zh from "../../locales/zh.js";

export default defineI18nConfig(() => {
    return {
        legacy: false,
        locale: 'en',
        fallbackLocale: 'en',
        messages: {
            en,
            zh,
            'en-US': en,
            'zh-CN': zh
        }
    }
})