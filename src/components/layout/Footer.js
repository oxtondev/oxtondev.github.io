import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 id="about" className="text-lg font-semibold">Sobre nós</h2>
        <p className="mt-5">
          A Oxton não é somente uma fábrica de software, somos o parceiro que ajudará sua empresa a crescer com as ferramentas mais modernas do mercado.
          Contamos com uma equipe de desenvolvedores e gestores altamente qualificada
          para atender nossos clientes com excelência.
        </p>
      </div>
      {/*<div className="flex-1 px-3">*/}
      {/*  <h2 className="text-lg font-semibold">Important Links</h2>*/}
      {/*  <ul className="mt-4 leading-loose">*/}
      {/*    <li>*/}
      {/*      <a href="https://codebushi.com">Terms &amp; Conditions</a>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <a href="https://codebushi.com">Privacy Policy</a>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</div>*/}
      <div className="flex-1 px-3">
        {/* <h2 className="text-lg font-semibold">Mídias Sociais</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://dev.to/changoman">Dev.to</a>
          </li>
          <li>
            <a href="https://twitter.com/HuntaroSan">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/codebushi/gatsby-starter-lander">GitHub</a>
          </li>
        </ul> */}
      </div>
    </div>
  </footer>
);

export default Footer;
