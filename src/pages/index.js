import React from 'react';
import Particles from 'react-particles-js';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import SimpleSlider from '../components/SimpleSlider';
import GraphQLSVG from '../svg/tecnologies/graphql.svg';
import SVGs from '../svg/tecnologies';
import { PopupButton } from '@typeform/embed-react'

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Nós construímos sitemas e apps rápidos.
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Maximize o potencial de seu negócio com sistemas de alto desempenho, construídos com as
            tecnologias mais recentes e inovadoras.
          </p>
          <p className="mt-8 md:mt-12">
            <PopupButton id="rSwChAXp" style={{ fontSize: 20 }} className="fale-conosco-button" autoClose={1}>
              <Button size="lg">Vamos lá!</Button>
            </PopupButton>
          </p>
          <p className="mt-4 text-gray-600">Iremos te orientar nos próximos passos</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section className="section-techs">
        {/*<SimpleSlider />*/}
      <div style={{ position: 'relative', height: '100%', width: '100%', paddingTop: '120px' }}>
        <SimpleSlider />
      </div>
        <div style={{ width: '100%', position: 'absolute' }}>

          <Particles
            params={{
              particles: {
                number: {
                  value: 8,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                line_linked: {
                  enable: false
                },
                move: {
                  speed: 1,
                  out_mode: 'out'
                },
                shape: {
                  type: [
                    'image'
                    // "circle"
                  ],
                  image: [
                    {
                      src: SVGs.AngularJSSVG,
                      height: 20,
                      width: 23
                    },
                    {
                      src: SVGs.CPlusPlusSVG,
                      height: 20,
                      width: 20
                    },
                    {
                      src: SVGs.DotNetSVG,
                      height: 20,
                      width: 20
                    }
                  ]
                },
                color: {
                  value: '#CCC'
                },
                size: {
                  value: 30,
                  random: false,
                  anim: {
                    enable: true,
                    speed: 4,
                    size_min: 10,
                    sync: false
                  }
                }
              },
              retina_detect: false
            }}
          />
        </div>

    </section>
    <section id="features" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Expertise Principal</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Product Design Sprint</p>
              <p className="mt-4">
                Com a abordagem do Design Sprint e do Design Thinking, ajudamos nossos clientes a
                projetar as melhores soluções digitais para seus negócios, tecnologicamente
                possíveis e financeiramente viáveis.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">UX / UI</p>
              <p className="mt-4">
                Usando da inovação impulsionada pela criatividade, desenhamos a melhor experiência
                para o usuário (UX), com design que favorece o uso das soluções desenvolvidas (UI),
                ambos alinhados com os objetivos do projeto.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Squad agile e DevOps</p>
              <p className="mt-4">
                Combinamos o uso de métodos ágeis com uma equipe altamente capacitada e motivada.
                Essa união de fatores garante a agilidade e a efetividade de nossas entregas.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Manutenção e Sustentação</p>
              <p className="mt-4">
                Cuidamos de cada etapa do seu projeto: apoiamos sua empresa durante todo o ciclo de
                vida do produto, desde o desenvolvimento até a sustentação e manutenção.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    {/* <SplitSection */}
    {/*  id="services" */}
    {/*  primarySlot={ */}
    {/*    <div className="lg:pr-32 xl:pr-48"> */}
    {/*      <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3> */}
    {/*      <p className="mt-8 text-xl font-light leading-relaxed"> */}
    {/*        Our team of enthusiastic marketers will analyse and evaluate how your company stacks */}
    {/*        against the closest competitors */}
    {/*      </p> */}
    {/*    </div> */}
    {/*  } */}
    {/*  secondarySlot={<SvgCharts />} */}
    {/* /> */}
    {/* <SplitSection */}
    {/*  reverseOrder */}
    {/*  primarySlot={ */}
    {/*    <div className="lg:pl-32 xl:pl-48"> */}
    {/*      <h3 className="text-3xl font-semibold leading-tight"> */}
    {/*        Design And Plan Your Business Growth Steps */}
    {/*      </h3> */}
    {/*      <p className="mt-8 text-xl font-light leading-relaxed"> */}
    {/*        Once the market analysis process is completed our staff will search for opportunities */}
    {/*        that are in reach */}
    {/*      </p> */}
    {/*    </div> */}
    {/*  } */}
    {/*  secondarySlot={<SvgCharts />} */}
    {/* /> */}
    {/* <SplitSection */}
    {/*  primarySlot={ */}
    {/*    <div className="lg:pr-32 xl:pr-48"> */}
    {/*      <h3 className="text-3xl font-semibold leading-tight"> */}
    {/*        Search For Performance Optimization */}
    {/*      </h3> */}
    {/*      <p className="mt-8 text-xl font-light leading-relaxed"> */}
    {/*        With all the information in place you will be presented with an action plan that your */}
    {/*        company needs to follow */}
    {/*      </p> */}
    {/*    </div> */}
    {/*  } */}
    {/*  secondarySlot={<SvgCharts />} */}
    {/* /> */}
    {/* <section id="stats" className="py-20 lg:pt-32"> */}
    {/*  <div className="container mx-auto text-center"> */}
    {/*    <LabelText className="text-gray-600">Our customers get results</LabelText> */}
    {/*    <div className="flex flex-col sm:flex-row mt-8 lg:px-24"> */}
    {/*      <div className="w-full sm:w-1/3"> */}
    {/*        <StatsBox primaryText="+100%" secondaryText="Stats Information" /> */}
    {/*      </div> */}
    {/*      <div className="w-full sm:w-1/3"> */}
    {/*        <StatsBox primaryText="+100%" secondaryText="Stats Information" /> */}
    {/*      </div> */}
    {/*      <div className="w-full sm:w-1/3"> */}
    {/*        <StatsBox primaryText="+100%" secondaryText="Stats Information" /> */}
    {/*      </div> */}
    {/*    </div> */}
    {/*  </div> */}
    {/* </section> */}
    {/* <section id="testimonials" className="py-20 lg:py-40"> */}
    {/*  <div className="container mx-auto"> */}
    {/*    <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText> */}
    {/*    <div className="flex flex-col md:flex-row md:-mx-3"> */}
    {/*      {customerData.map(customer => ( */}
    {/*        <div key={customer.customerName} className="flex-1 px-3"> */}
    {/*          <CustomerCard customer={customer} /> */}
    {/*        </div> */}
    {/*      ))} */}
    {/*    </div> */}
    {/*  </div> */}
    {/* </section> */}
    {/* <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">
        O desempenho do seu site ou app é o que faz ou quebra seu negócio hoje em dia.
      </h3>
      <p className="mt-8 text-xl font-light">
        Nós o ajudaremos a construir um site rápido e moderno, PWA ou loja de comércio eletrônico
        que trará clientes e ficará no topo da concorrência. Soluções de desenvolvimento web
        personalizadas de primeira linha alinhadas com seus objetivos de negócios.
      </p>
      <p className="mt-8">
        <Button size="xl">Vamos conversar</Button>
      </p>
    </section> */}
  </Layout>
);
