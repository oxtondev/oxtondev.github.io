import React from 'react';

import SVG from './tecnologies/javascript.svg';

const JavaScript = ({ size }) => (
  <div className="div-svg">
    <section className="contain-svg">
      <img alt="img" src={SVG} width={size} height={size} />
    </section>
  </div>
);

export default JavaScript;
