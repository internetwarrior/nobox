import React from 'react';
import {useTranslation}  from 'react-i18next';
import scss from './lang.module.scss'
import { Button } from '../../components/UI/Button';

const Language = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log('lang clicked')
  };

  return (
    <div className={scss.wrapper}>
      <p className={scss.choose}>{t('main.lang')}</p>
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('ru')}>Русский</Button>
      <Button onClick={() => changeLanguage('kg')}>Кыргызча</Button>
    </div>
  );
};

export default Language;
