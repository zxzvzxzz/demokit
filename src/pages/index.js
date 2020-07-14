import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  process.hrtime = () => null;
}

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { Button } from '../components/ui/Button';

const features = [
  {
    title: <>Get Demo Instantly</>,
    imageUrl: 'img/gear.svg',
    description: (
      <>
        Centralized place to get "open to use" Azure demos.
      </>
    ),
  },
  {
    title: <>Accelerate Sales</>,
    imageUrl: 'img/eye.svg',
    description: (
      <>
        The Idea come from our engagements - generate reusable Azure demos, accelerate Azure consumption.
      </>
    ),
  },
  {
    title: <>Mission</>,
    imageUrl: 'img/puzzle.svg',
    description: (
      <>
        Help our sales start conversation & engagement with cutting edge Azure demos.
      </>
    ),
  },
  {
    title: <>More</>,
    imageUrl: 'img/more-options.svg',
    description: (
      <>
        Ready to rock & roll - VIEW DEMOS!
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <div className={classnames('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function SplashContainer(props) {
  return (
    <div className={styles.homeContainer}>
      <img
        className={styles.desktopOnly}
        src={useBaseUrl("img/hexagons/blue.svg")}
        style={{ position: 'absolute', left: '350px', top: '100px', height: '30px' }}
      />
      <img
        className={styles.desktopOnly}
        src={useBaseUrl("img/hexagons/pink.svg")}
        style={{ position: 'absolute', left: '100px', top: '200px', height: '150px' }}
      />
      <img
        className={styles.desktopOnly}
        src={useBaseUrl("img/hexagons/blue.svg")}
        style={{ position: 'absolute', left: '250px', top: '450px', height: '70px' }}
      />
      <img
        className={styles.desktopOnly}
        src={useBaseUrl("img/hexagons/pink.svg")}
        style={{ position: 'absolute', right: '300px', top: '150px', height: '70px' }}
      />
      <img
        className={styles.desktopOnly}
        src={useBaseUrl("img/hexagons/blue.svg")}
        style={{ position: 'absolute', right: '200px', top: '350px', height: '100px' }}
      />
      <div className={styles.homeSplashFade}>
        <div className={[styles.wrapper, styles.homeWrapper]}>{props.children}</div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className={styles.coverContainer}>
      <img src={useBaseUrl("img/cover.png")} className={styles.cover} />
      <h3 className={styles.projectTitle}>Azure Sales Demo Kit</h3>
      <h4 className={styles.projectTitle}>Help our sales start conversation & engagement with cutting edge Azure demos.</h4>
    </div>
  );
}

function Home() {
  return (
    <Layout title={`Azure Sales Demo Kit`} description="">
      <header>
        <SplashContainer>
          <div className={styles.inner}>
            <Title/>
            <div className={styles.buttonsWrapper}>
              <Button>
                <Link to={useBaseUrl("docs/welcome")}>View Demos</Link>
              </Button>
            </div>
          </div>
        </SplashContainer>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
                
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
