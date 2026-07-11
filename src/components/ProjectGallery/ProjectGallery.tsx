"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import type { ProjectImage } from "@/app/types/portfolio";
import { assetPath } from "@/lib/assetPath";
import styles from "./ProjectGallery.module.css";

type ProjectGalleryProps = {
  projectTitle: string;
  images: ProjectImage[];
};

export function ProjectGallery({ projectTitle, images }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentImage = images[currentIndex];
  const hasMultipleImages = images.length > 1;

  const showPrevious = useCallback(() => {
    setCurrentIndex((index) => {
      return index === 0 ? images.length - 1 : index - 1;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setCurrentIndex((index) => {
      return index === images.length - 1 ? 0 : index + 1;
    });
  }, [images.length]);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }

      if (event.key === "ArrowLeft" && hasMultipleImages) {
        showPrevious();
      }

      if (event.key === "ArrowRight" && hasMultipleImages) {
        showNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasMultipleImages, isModalOpen, showNext, showPrevious]);

  if (!currentImage) {
    return null;
  }

  const modal =
    isModalOpen && typeof document !== "undefined"
      ? createPortal(
          <div
            className={styles.modalBackdrop}
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsModalOpen(false);
              }
            }}>
            <div
              className={styles.modal}
              role="dialog"
              aria-modal="true"
              aria-label={`Vista ampliada de ${projectTitle}`}>
              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setIsModalOpen(false)}
                aria-label="Cerrar imagen ampliada">
                <X aria-hidden="true" />
              </button>

              <div className={styles.modalImageFrame}>
                <Image
                  src={assetPath(currentImage.src)}
                  alt={currentImage.alt}
                  fill
                  sizes="100vw"
                  className={styles.modalImage}
                  priority
                />
              </div>

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    className={`${styles.modalNavigation} ${styles.modalPrevious}`}
                    onClick={showPrevious}
                    aria-label="Ver imagen anterior">
                    <ChevronLeft aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    className={`${styles.modalNavigation} ${styles.modalNext}`}
                    onClick={showNext}
                    aria-label="Ver imagen siguiente">
                    <ChevronRight aria-hidden="true" />
                  </button>

                  <div className={styles.modalCounter}>
                    {currentIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <div className={styles.gallery}>
        <Image
          key={currentImage.src}
          src={assetPath(currentImage.src)}
          alt={currentImage.alt}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className={styles.galleryImage}
        />

        <button
          type="button"
          className={styles.viewButton}
          onClick={() => setIsModalOpen(true)}
          aria-label={`Ampliar imagen de ${projectTitle}`}
          title="Ampliar imagen">
          <Eye size={19} aria-hidden="true" />
        </button>

        {hasMultipleImages && (
          <>
            <button
              type="button"
              className={`${styles.navigationButton} ${styles.previousButton}`}
              onClick={showPrevious}
              aria-label="Ver imagen anterior">
              <ChevronLeft aria-hidden="true" />
            </button>

            <button
              type="button"
              className={`${styles.navigationButton} ${styles.nextButton}`}
              onClick={showNext}
              aria-label="Ver imagen siguiente">
              <ChevronRight aria-hidden="true" />
            </button>

            <div className={styles.indicators}>
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  className={`${styles.indicator} ${
                    index === currentIndex ? styles.activeIndicator : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Mostrar imagen ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : undefined}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {modal}
    </>
  );
}
