export default function Book({ url, imgSrc, title, author }) {
  return (
    <>
      <a href={url} className="book">
        <figure>
          <img alt={`Book cover for ${title} by ${author}`} src={imgSrc} />
        </figure>
        <p>
          <span className="book-title">{title}</span>
          <br />
          <span className="book-author">{author}</span>
        </p>
      </a>
    </>
  );
}
