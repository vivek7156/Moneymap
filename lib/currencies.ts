export const Currencies = [
    { value: "INR", label: "₹ Indian Rupee", locale: "hi-IN" },
    { value: "USD", label: "$ Dollar", locale: "en-US" },
    { value: "EUR", label: "€ Euro", locale: "de-DE" },
    { value: "GBP", label: "£ Pound", locale: "en-GB" },
    { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
    { value: "AUD", label: "$ Australian Dollar", locale: "en-AU" },
    { value: "CAD", label: "$ Canadian Dollar", locale: "en-CA" },
    { value: "CHF", label: "CHF Swiss Franc", locale: "de-CH" },
    { value: "CNY", label: "¥ Chinese Yuan", locale: "zh-CN" },
    { value: "BRL", label: "R$ Brazilian Real", locale: "pt-BR" },
    { value: "ZAR", label: "R South African Rand", locale: "en-ZA" },
    { value: "RUB", label: "₽ Russian Ruble", locale: "ru-RU" },
    { value: "KRW", label: "₩ South Korean Won", locale: "ko-KR" },
    { value: "MXN", label: "$ Mexican Peso", locale: "es-MX" },
    { value: "SEK", label: "kr Swedish Krona", locale: "sv-SE" },
    { value: "SGD", label: "$ Singapore Dollar", locale: "en-SG" },
    { value: "HKD", label: "$ Hong Kong Dollar", locale: "en-HK" },
    { value: "NOK", label: "kr Norwegian Krone", locale: "nb-NO" },
    { value: "TRY", label: "₺ Turkish Lira", locale: "tr-TR" }
];

export type Currency = (typeof Currencies)[0];