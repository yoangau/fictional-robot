import { LanguageMap } from '../language/languages';

interface About {
  name: string;
  image: string;
  description: LanguageMap<string>;
  github?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  twitch?: string;
  email?: string;
  phone?: string;
}

export const aboutHeaderSource: LanguageMap<string> = {
  fr: 'À propos',
  en: 'About',
};

export const aboutSource: About = {
  name: 'Fictional Robot',
  image: 'https://github.com/yoangau.png',
  description: { en: require('./about-en.md'), fr: require('./about-fr.md') },
  github: 'https://github.com/yoangau/',
  linkedin: 'https://www.linkedin.com/in/yoangau/',
  email: 'fictionalrobotblog@gmail.com',
};
