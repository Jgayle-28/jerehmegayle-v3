import { useEffect, useState } from 'react';
import '../styles/Home.module.css';
import ContainerBlock from '../components/ContainerBlock';
import FavoriteProjects from '../components/FavoriteProjects';
import LatestCode from '../components/LatestCode';
import Hero from '../components/Hero';
import getLatestRepos from '@lib/getLatestRepos';
import userData from '@constants/data';
import Loader from '../components/Loader';

export default function Home({ repositories }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    demoAsyncCall().then(() => setIsLoading(false));
  }, []);

  const demoAsyncCall = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2000));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ContainerBlock
          title='Jerehme Gayle - Developer, Husband, Father of 6'
          description={`I've been developing websites for 5 years straight. Get in touch with me to know more.`}>
          <>
            <Hero />
            <FavoriteProjects />
            <LatestCode repositories={repositories} />
          </>
        </ContainerBlock>
      )}
    </>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};
