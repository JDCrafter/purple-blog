module.exports = {
  meta: {
    title: "Julians toller Blog",
    description: "Ein einfacher Blog über Elektronik und so.",
    lang: "de",
    siteUrl: "https://julian.dreidumme.de/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Lorem ipsum dolor sit amet consecuteor",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://example.com/",
    authorName: "John Doe",
    authorEmail: "johndoe@example.com"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Willkommen auf meiner Netz-Seite",
    description: "Das ist erstmal ein Test"
  }
}