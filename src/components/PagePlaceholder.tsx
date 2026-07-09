type PagePlaceholderProps = {
  title: string;
  description: string;
};

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <section className="pageSection">
      <div className="pageHeader">
        <p className="eyebrow">Portafolio</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="placeholderPanel">
        <p>
          Esta sección quedará lista en la siguiente etapa. Aquí colocaremos el
          contenido, tarjetas, imágenes, enlaces y detalles correspondientes.
        </p>
      </div>
    </section>
  );
}
