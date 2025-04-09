export default function Card({ heading, text, imageSrc }) {
  return (
    <article className="card">
      <img
        className="card__img"
        src={imageSrc}
        alt={heading}
        aria-label={heading}
      />
      <div className="card__content">
        <h3 className="card__title">{heading}</h3>
        <p className="card__text">{text}</p>
      </div>
    </article>
  );
}
