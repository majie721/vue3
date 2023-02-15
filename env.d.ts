/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // 更多环境变量...
    //api 请求url
    readonly VITE_API_URL :string
    //api 请求超时时间
    readonly VITE_API_TIMEOUT :number
    // 登录路由
    readonly VITE_LOGIN_PATH :string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  