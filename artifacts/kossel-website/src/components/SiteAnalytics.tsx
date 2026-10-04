import { useEffect } from "react";

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

export function SiteAnalytics() {
  useEffect(() => {
    if (!measurementId || !/^G-[A-Z0-9]+$/i.test(measurementId)) return;

    const externalScript = document.createElement("script");
    externalScript.async = true;
    externalScript.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    externalScript.dataset.kosselAnalytics = "external";

    const configurationScript = document.createElement("script");
    configurationScript.dataset.kosselAnalytics = "configuration";
    configurationScript.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', { anonymize_ip: true });
    `;

    document.head.append(externalScript, configurationScript);
    return () => {
      externalScript.remove();
      configurationScript.remove();
    };
  }, []);

  return null;
}