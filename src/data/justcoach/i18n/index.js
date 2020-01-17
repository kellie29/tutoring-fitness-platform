// @flow

import flatten from 'flat';

import obschartEn from '../../obschart/18n/en.json';

import en from './en';

export default {
  en: { ...flatten(obschartEn), ...flatten(en) },
};
