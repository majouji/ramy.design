import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import Book from "../components/books";

export default function About() {
  return (
    <Layout children>
      <Head>
        <title>About &ndash; {siteTitle}</title>
      </Head>
      <h1>Books</h1>
      <p>
        Here you’ll find an occasionally-updated list of books I’ve read and
        enjoyed. Few of them are related to design, but if like me, you like
        books that make you think, hopefully you’ll find some good ones here. <a href="#novels">Jump to novels!</a>
      </p>
      <section>
        <h3>Design</h3>
        <div className="grid">
          <Book
            url="https://monocle.com"
            title="The Monocle Book of Japan"
            author="Monocle"
            imgSrc="/images/books/monocle-japan.jpg"
          />
          <Book
            title="Un roman français"
            author="Frédéric Beibeder"
            imgSrc="https://i.pinimg.com/474x/07/75/d9/0775d9b3ed5e4821da7be05c5e6cc38b.jpg"
          />
          <Book
            title="The Art of Photography"
            author="Bruce Barnbauss"
            imgSrc="https://i.pinimg.com/474x/fb/b0/7d/fbb07db1b9d3b517f785f20a50a6317a.jpg"
          />
          <Book
            title="The Monocle Book of Japan"
            author="Monocle"
            imgSrc="/images/books/monocle-japan.jpg"
          />
          <Book
            title="The Monocle Book of Japan"
            author="Monocle"
            imgSrc="/images/books/monocle-japan.jpg"
          />
          <Book
            title="The Monocle Book of Japan"
            author="Monocle"
            imgSrc="/images/books/monocle-japan.jpg"
          />
          <Book
            title="The Monocle Book of Japan"
            author="Monocle"
            imgSrc="/images/books/monocle-japan.jpg"
          />
          <Book
            title="The Monocle Book of Japan"
            author="Monocle"
            imgSrc="/images/books/monocle-japan.jpg"
          />
        </div>
      </section>
      <section id="novels">
        <h3>Novels</h3>
        <div className="grid">
          <Book
            url="https://monocle.com"
            title="The Monocle Book of Japan"
            author="Monocle"
            imgSrc="/images/books/monocle-japan.jpg"
          />
          <Book
            title="Un roman français"
            author="Frédéric Beibeder"
            imgSrc="https://i.pinimg.com/474x/07/75/d9/0775d9b3ed5e4821da7be05c5e6cc38b.jpg"
          />
          <Book
            title="The Art of Photography"
            author="Bruce Barnbauss"
            imgSrc="https://i.pinimg.com/474x/fb/b0/7d/fbb07db1b9d3b517f785f20a50a6317a.jpg"
          />
          <Book
            title="The Monocle Book of Japan"
            author="Monocle"
            imgSrc="/images/books/monocle-japan.jpg"
          />
          <Book
            title="The Monocle Book of Japan"
            author="Monocle"
            imgSrc="/images/books/monocle-japan.jpg"
          />
          <Book
            title="The Monocle Book of Japan"
            author="Monocle"
            imgSrc="/images/books/monocle-japan.jpg"
          />
          <Book
            title="The Monocle Book of Japan"
            author="Monocle"
            imgSrc="/images/books/monocle-japan.jpg"
          />
          <Book
            title="The Monocle Book of Japan"
            author="Monocle"
            imgSrc="/images/books/monocle-japan.jpg"
          />
        </div>
      </section>
    </Layout>
  );
}
