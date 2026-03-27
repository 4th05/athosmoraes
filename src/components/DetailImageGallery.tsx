import React from "react";

type DetailImage = {
  src: string;
  alt: string;
};

type DetailImageGalleryProps = {
  images: DetailImage[];
};

export function DetailImageGallery({ images }: DetailImageGalleryProps) {
  const className = images.length === 1 ? "detail-images detail-images--single" : "detail-images";

  return (
    <div className={className}>
      {images.map((img) => (
        <figure key={img.src} className="detail-figure">
          <a className="detail-figure__link" href={img.src} target="_blank" rel="noreferrer">
            <img className="detail-figure__media" src={img.src} alt={img.alt} loading="lazy" />
          </a>
          <figcaption className="detail-figure__caption">{img.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}

