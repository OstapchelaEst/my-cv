export const showError = (errors, name, lang) => {
  if (errors[name]) {
    if (errors[name].message) {
      const errorObj = JSON.parse(errors[name].message);
      return errorObj[lang];
    } else {
      return lang === 'en' ? 'Required' : 'Обязательное поле';
    }
  } else {
    return '';
  }
};
