import React from 'react';

import SVG from './tecnologies/android.svg';

const Android = ({ size }) => (
  <div className="div-svg">
    <section className="contain-svg">
      <img alt="img" src={SVG} width={size} height={size} />
    </section>
  </div>
);

export default Android;
