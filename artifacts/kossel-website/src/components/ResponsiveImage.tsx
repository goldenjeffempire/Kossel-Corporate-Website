import type { ImgHTMLAttributes } from "react";

export type ResponsiveImageFormat = {
  small: string;
  medium: string;
  large: string;
};

export type ResponsiveImageSources = {
  avif: ResponsiveImageFormat;
  webp: ResponsiveImageFormat;
  jpeg: string;
};

type ResponsiveImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet" | "sizes"
> & {
  sources: ResponsiveImageSources;
  sizes?: string;
};

function buildSrcSet(format: ResponsiveImageFormat) {
  return `${format.small} 480w, ${format.medium} 768w, ${format.large} 1024w`;
}

export function ResponsiveImage({
  sources,
  sizes = "100vw",
  loading = "lazy",
  decoding = "async",
  ...props
}: ResponsiveImageProps) {
  return (
    <picture>
      <source type="image/avif" srcSet={buildSrcSet(sources.avif)} sizes={sizes} />
      <source type="image/webp" srcSet={buildSrcSet(sources.webp)} sizes={sizes} />
      <img
        {...props}
        src={sources.jpeg}
        loading={loading}
        decoding={decoding}
        sizes={sizes}
      />
    </picture>
  );
}