export default function TweetButton() {
  return (
    <div>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-show-count="false"
      >
        Tweet
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </div>
  );
}

export function NewTweetButton({ pageTitle, pageURL }) {
  <button className="twitter-share-button">
    <a href=”https://twitter.com/intent/tweet?text={`${pageTitle}`}&url={`${pageURL}`}”</a>
    Tweet (New!)
  </button>
}