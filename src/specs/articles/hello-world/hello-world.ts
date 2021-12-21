import { Article } from '../article.interface';

export const HelloWorld: Article = {
  title: { en: 'Hello World', fr: 'Bonjour le monde' },
  description: { en: 'This is a test article', fr: 'Ceci est un article test' },
  img: 'https://miro.medium.com/max/4000/1*KUy_KKExZrSpBuv9XfyBgA.png',
  text: {
    en: fetch(require('./hello-world-en.md')).then((response) => response.text()),
    fr: fetch(require('./hello-world-fr.md')).then((response) => response.text()),
  },
  date: '2020-05-22',
  url: 'hello-world',
};
