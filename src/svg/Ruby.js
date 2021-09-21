import React from 'react';

import SVG from './tecnologies/ruby.svg';

const Ruby = ({ size }) => (
  <div className="div-svg">
    <section className="contain-svg">
      <img alt="img" src={SVG} width={size} height={size} />
    </section>
  </div>
);

export default Ruby;
