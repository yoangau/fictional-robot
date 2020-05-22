import Article from "../../interfaces/article.interface";

export const HelloWorld: Article = {
  title: { en: "Hello World", fr: "Bonjour le monde" },
  description: { en: "This is a test article", fr: "Ceci est un article test" },
  img: "https://miro.medium.com/max/4000/1*KUy_KKExZrSpBuv9XfyBgA.png",
  text: {
    en: require("./hello-world-en.md"),
    fr: require("./hello-world-fr.md"),
  },
  date: new Date("22-05-2020"),
};
