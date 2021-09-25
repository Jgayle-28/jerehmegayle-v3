import { useEffect, useState, useContext } from 'react';
import ContainerBlock from '@components/common/ContainerBlock';
import FavoriteProjects from '@components/FavoriteProjects';
import LatestCode from '@components/LatestCode';
import Hero from '@components/Hero';
import Testimonials from '@components/Testimonials';
import Loader from '@components/common/Loader';
import getLatestRepos from '@lib/getLatestRepos';
import userData from '@constants/data';
import useScrollBlock from '@hooks/useScrollBlock';
import AppContext from 'context/appContext';

export default function Home({ repositories }) {
  const appContext = useContext(AppContext);
  const { setInitialLoad, initialLoad } = appContext;

  const [blockScroll, allowScroll] = useScrollBlock();
  const [isLoading, setIsLoading] = useState(true);
  const [finishedAnimation, setFinishedAnimation] = useState(false);

  useEffect(() => {
    demoAsyncCall().then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Disable scrolling for highlight animation
      blockScroll();
      // Allow scrolling after highlight animation
      setTimeout(() => handleAfterAnimation(), 3500);
    }
  }, [isLoading]);

  const handleAfterAnimation = () => {
    allowScroll();
    setFinishedAnimation(true);
    setInitialLoad(false);
  };

  const demoAsyncCall = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  };

  return (
    <>
      {initialLoad && isLoading ? (
        <Loader />
      ) : (
        <ContainerBlock
          title='Jerehme Gayle - Developer, Husband, Father of 6'
          description={`I've been developing websites for 5 years straight. Get in touch with me to know more.`}>
          <>
            <Hero
              initialLoad={initialLoad}
              finishedAnimation={finishedAnimation}
            />
            <FavoriteProjects finishedAnimation={finishedAnimation} />
            <LatestCode repositories={repositories} />
            <Testimonials />
          </>
        </ContainerBlock>
      )}
    </>
  );
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};
