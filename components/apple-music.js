export default function AppleMusicEmbed({ url, height }) {
  return (
    <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450px"
      style={{
          width:'100%',
          maxWidth: '660px',
          overflow:'hidden',
          background: 'transparent'
      }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={`${url}`}></iframe>
  )
}