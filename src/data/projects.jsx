import RsLang from './../assets/projectsPhotos/rsLang.png';
import Galery from './../assets/projectsPhotos/galery.png';
import MemoryGame from './../assets/projectsPhotos/memoryGame.png';
import Portfolio from './../assets/projectsPhotos/photograph.png';
import Puppies from './../assets/projectsPhotos/puppies.png';
import SkyGlass from './../assets/projectsPhotos/skyGlass.png';
import WebPlayer from './../assets/projectsPhotos/webPlayer.png';
import Shelter from './../assets/projectsPhotos/Shelter.png';
import CV from './../assets/projectsPhotos/portfolio.png';
import AppManager from './../assets/projectsPhotos/appManager.png';
export const projectsTitle = {
  en: `My projects`,
  ru: `Мои проекты`,
};
export const ProjectsInfo = [
  {
    name: 'Shelter',
    description: { en: 'Pet shelter website', ru: `Сайт приюта для животных` },
    tools: 'JavaScript, SCSS',
    imgSrc: Shelter,
    url: 'https://rolling-scopes-school.github.io/ostapchelaest-JSFE2022Q1/shelter/pages/main/#!',
  },
  {
    name: 'CV',
    description: { en: 'I think he belongs here too :)', ru: 'Думаю, оно должно быть здесь :)' },
    tools: 'React, react-hook-forms, SCSS',
    imgSrc: CV,
    url: '/',
  },
  {
    name: 'App-manager',
    description: {
      en: 'App for creating task-boards',
      ru: `Приложение для создания task-boards`,
    },
    tools:
      'TypeScript, React, React-router, Redux-toolkit, react-hook-form, beautiful dnd, axios, socket.io, SCSS',
    imgSrc: AppManager,
    url: 'https://orla90.github.io/Project-Management-App/',
  },
  {
    name: 'gallery',
    description: {
      en: 'Image search site based on unsplash API',
      ru: `Поисковик изображений на базе unsplash API`,
    },
    tools: 'JavaScript, SCSS',
    imgSrc: Galery,
    url: 'https://rolling-scopes-school.github.io/ostapchelaest-JSFEPRESCHOOL/js30.2.2-image-galery/',
  },
  {
    name: 'Memory game',
    description: { en: 'Memory card game', ru: `Карточная игра на запоминание` },
    tools: 'JavaScript, SCSS',
    imgSrc: MemoryGame,
    url: 'https://rolling-scopes-school.github.io/ostapchelaest-JSFEPRESCHOOL/js30.3.2-memory-game/',
  },
  {
    name: 'rs-lang',
    description: {
      en: 'Site for learning English with games and statistics',
      ru: `Сайт для изучения английского языка с статистикой и мини-играми`,
    },
    tools: 'TypeScript, SCSS, Axios, Navigo',
    imgSrc: RsLang,
    url: 'https://rslang-git-gh-pages-ostapchelaest.vercel.app/',
  },
  {
    name: "photographer's portfolio",
    description: { en: 'Photographer portfolio landing page', ru: `Лендинг портфолио фотографа` },
    tools: 'JavaScript, SCSS',
    imgSrc: Portfolio,
    url: 'https://rolling-scopes-school.github.io/ostapchelaest-JSFEPRESCHOOL/portfolio/',
  },
  {
    name: 'Puppies',
    description: { en: 'Landing page about puppies', ru: `Лендинг про щенков` },
    tools: 'JavaScript, CSS',
    imgSrc: Puppies,
    url: 'https://ostapchelaest.github.io/Puppies/',
  },
  {
    name: 'SkyGlass',
    description: { en: 'Small business website', ru: `Сайт малого бизнеса` },
    tools: 'JavaScript, CSS',
    imgSrc: SkyGlass,
    url: 'https://ostapchelaest.github.io/SkyGlass/SkyGlass/index.html',
  },
  {
    name: 'audio player',
    description: { en: 'Simple custom audio player', ru: `Простой веб-плеер` },
    tools: 'JavaScript, CSS',
    imgSrc: WebPlayer,
    url: 'https://rolling-scopes-school.github.io/ostapchelaest-JSFEPRESCHOOL/js30,1.2-audio-player/',
  },
];
