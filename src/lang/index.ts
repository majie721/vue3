import {
    createI18n
  } from "vue-i18n";
  import zh from "./zh";
  import en from "./en";


  export enum langEnum {
    zh = '简体中文',
    en = 'Enlish',
  }
  
  const i18n = createI18n({
    legacy: false,
    globalInjection:true,
    locale: localStorage.getItem('language') || 'zh', // 定义默认语言为中文
    messages: {
      zh,
      en,
    },
  });
  export default i18n;