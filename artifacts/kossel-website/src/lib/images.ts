import type {
  ResponsiveImageFormat,
  ResponsiveImageSources,
} from "@/components/ResponsiveImage";

const imageBase = `${import.meta.env.BASE_URL}images/`;

function format(stem: string, extension: "avif" | "webp"): ResponsiveImageFormat {
  return {
    small: `${imageBase}${stem}-480.${extension}`,
    medium: `${imageBase}${stem}-768.${extension}`,
    large: `${imageBase}${stem}-1024.${extension}`,
  };
}

export function imageSources(filename: string): ResponsiveImageSources {
  const stem = filename.replace(/\.[^.]+$/, "");

  return {
    avif: format(stem, "avif"),
    webp: format(stem, "webp"),
    jpeg: `${imageBase}${filename}`,
  };
}