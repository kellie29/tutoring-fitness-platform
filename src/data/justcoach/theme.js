// @flow

import fullBlack from './assets/fullBlack.svg';
import fullWhite from './assets/fullWhite.svg';
import shortBlack from './assets/shortBlack.svg';
import shortWhite from './assets/shortWhite.svg';

/*
Primary Color: Carolina Blue
rgb(92, 136, 218)

Accent Color: Gradient Blue
rgb(92, 136, 218)
rgb(37, 201, 208)

Secondary Color: Tiffany Blue
rgb(37, 201, 208)

Secondary Color: White
rgb(242, 241, 240)

Secondary Color: Black
rgb(36, 40, 43)
*/

export default {
  logo: {
    fullBlack,
    fullWhite,
    shortBlack,
    shortWhite,
  },
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Roboto:300,400,600,700&amp;subset=latin-ext&amp;display=swap',
    'https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700&amp;subset=latin-ext&amp;display=swap',
  ],
  types: {
    title: 'Roboto',
    subtitle: 'Roboto',
    body: 'Roboto',
    // body: 'Nunito Sans',
  },
  colors: {
    primary: 'rgb(37, 201, 208)',
    secondary: 'rgb(92, 136, 218)',
    background: 'rgb(36, 40, 43)',
    // white: 'rgb(242, 241, 240)',
    // black: 'rgb(36, 40, 43)'
  },
};
