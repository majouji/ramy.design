export function AppleMusicEmbed({ url, title }) {
  return (
    <iframe
      className="embed--apple-music"
      allow="autoplay *; encrypted-media *;"
      frameborder="0"
      height="450px"
      maxHeight="100%"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={`${url}`}
      title={`${title}`}
    ></iframe>
  );
}

export function SpotifyEmbed({ url, title }) {
  return (
    <iframe
      className="embed--spotify"
      src={`${url}`}
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
      tile={`${title}`}
    ></iframe>
  );
}
