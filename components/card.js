export default function Card({ title, subtitle, description, src, linkTo, alt }) {
  return(
    <div className="card">
      <a href={linkTo}>
        <figure>
          <img src={src} alt={alt} />
        </figure>
        <div className="card-info">
          <div className="card-column-left">
            <h3 className="card-title">{title}</h3>
            <h5 className="card-subtitle">{subtitle}</h5>
          </div>
          <span className="card-description">{description}</span>
        </div>
      </a>
    </div>
  );
}