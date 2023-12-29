export const MenuData = [
  { name: { en: 'Summary', ru: 'О себе' }, scrollValue: 200 },
  { name: { en: 'Education', ru: 'Образование' }, scrollValue: 600 },
  { name: { en: 'Sertificates', ru: 'Сертификаты' }, scrollValue: 800 },
  { name: { en: 'Projects', ru: 'Проекты' }, scrollValue: 1000 },
  { name: { en: 'Contacts', ru: 'Контакты' }, scrollValue: 1200 },
];

export const arrScrollValues = MenuData.map((item) => item.scrollValue);
