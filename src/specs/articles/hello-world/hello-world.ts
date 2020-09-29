import { Article } from '../article.interface';

export const HelloWorld: Article = {
  title: { en: 'Hello World', fr: 'Bonjour le monde' },
  description: { en: 'This is a test article', fr: 'Ceci est un article test' },
  img: 'articles/hello-world/tv-test-pattern.png',
  text: {
    en: 'hello-world/hello-world-en.md',
    fr: 'hello-world/hello-world-fr.md',
  },
  date: '2020-05-22',
  url: 'hello-world',
};
