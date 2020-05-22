import Article from "../../interfaces/article.interface";

export const helloWorld: Article = {
  title: "Hello World",
  description: "This is a test article",
  img: "https://miro.medium.com/max/4000/1*KUy_KKExZrSpBuv9XfyBgA.png",
  text: require("./hello-world.md"),
  date: new Date("22-05-2020"),
};
