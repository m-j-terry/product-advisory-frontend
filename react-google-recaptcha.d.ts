interface ReCAPTCHAProps {
    sitekey: string;
    handleRecaptchaChange: (token: boolean) => void;
    theme?: 'light' | 'dark';
    size?: 'compact' | 'normal' | 'invisible';
    tabindex?: number;
    onExpired?: () => void;
    onErrored?: () => void;
    stoken?: string;
    hl?: string;
    badge?: 'bottomright' | 'bottomleft' | 'inline';
}