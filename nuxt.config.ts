const langs = {
    'en': 'en-US',
    'zh': 'zh-CN'
}

console.error(process.env.NODE_ENV)

console.error(process.env.LANG_ENV)

const LANG_ENV = process.env.LANG_ENV

const NODE_ENV = process.env.NODE_ENV

// const LANG = langs.hasOwnProperty(LANG_ENV) ? langs[LANG_ENV] : langs.en
const LANG = langs.en

let htmlGrayCss = "html-gray.css"
if (LANG.startsWith('zh')) {
    htmlGrayCss = "html-gray-zh.css"
} else {
    htmlGrayCss = "html-gray-en.css"
}


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    buildDir: LANG_ENV ? ('.nuxt-' + LANG_ENV) : '.nuxt',
    ssr: true,
    app: {
        head: {
            title: 'kwunphi',
            htmlAttrs: {
                // lang: LANG,
            },
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: "stylesheet", type: "text/css", href: 'https://file.kwunphi.com/kwunphi/css/' + htmlGrayCss }
            ],
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'keywords', name: 'keywords', content: '' },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            script: [
                // 引入百度统计 https://tongji.baidu.com/
                // { src: 'https://hm.baidu.com/hm.js?bbe5df24e1c24e850d281175d369d6d0' },
                // { src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.min.js' }
            ]
        },
        // automatic transition，转场动画
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    modules: [
        '@nuxtjs/i18n'
    ],
    i18n: {
        strategy: 'prefix_except_default',
        locales: [{
            code: 'en',
            iso: 'en-US',
            domain: 'en.kwunphi.com'
        }, {
            code: 'zh',
            iso: 'zh-CN',
            domain: 'zh.kwunphi.com'
        }],
        differentDomains: NODE_ENV === 'production',
        defaultLocale: 'en',
        vueI18n: './plugins/i18n/vueI18n.ts'
    }

})
