export default function SpotifyEmbed({ url, title }) {
  return (
    <iframe
      className="embed--spotify"
      src={`${url}`}
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
      tile={`${title}`}>
    </iframe>
  );
}
