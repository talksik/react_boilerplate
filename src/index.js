import React from 'react';
import ReactDOM from 'react-dom';

import styles from "./styles.less";

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div className={styles.header}>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();