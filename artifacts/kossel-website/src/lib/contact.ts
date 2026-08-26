export const KOSSEL_PHONE = "+2348030967258";
export const KOSSEL_PHONE_DISPLAY = "+234 803 096 7258";
export const KOSSEL_CALL_URL = `tel:${KOSSEL_PHONE}`;

const whatsappGreeting = "Hello Kossel LTD., I would like to learn more about your services.";
export const KOSSEL_WHATSAPP_URL = `https://wa.me/${KOSSEL_PHONE.replace("+", "")}?text=${encodeURIComponent(whatsappGreeting)}`;