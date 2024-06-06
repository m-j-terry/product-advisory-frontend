declare namespace NodeJS{
    export interface ProcessEnv{
        MONGO_URI:string,
        NEXT_PUBLIC_REACT_APP_SITE_KEY:string,
        RECAPTCHA_SECRET_KEY:string,
        PORT:string,
        EMAIL_USERNAME:string,
        NOREPLY_EMAIL:string,
        EMAIL_PASSWORD:string,
        SECRET_KEY:string,
        HUBSPOT_ACCESS_TOKEN:string,
        CLIENT_SECRET:string,
        NEXT_PUBLIC_BACKEND_URL:string,
    }
}