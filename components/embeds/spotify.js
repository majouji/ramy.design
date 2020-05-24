export default function SpotifyEmbed({ url }) {
  return (
    <iframe
      className="embed--spotify"
      src={`${url}`}
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media">
    </iframe>
  );
}
