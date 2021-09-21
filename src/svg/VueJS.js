import React from 'react';

import SVG from './tecnologies/vue-dot-js.svg';

const VueJS = ({ size }) => (
  <div className="div-svg">
    <section className="contain-svg">
      <img alt="img" src={SVG} width={size} height={size} />
    </section>
  </div>
);

export default VueJS;
