import React, { useEffect, useState, useRef } from 'react';
import userData from '@constants/data';
import { motion, useAnimation } from 'framer-motion';
import useWindowDimensions from '@hooks/useWindowDimensions';
import BoxArrowOutRight from 'icons/BoxArrowOutRight';
import LandingSectionHeader from './common/LandingSectionHeader';

export default function LatestCode({ repositories }) {
  const headerRef = useRef();
  const [repos, setRepos] = useState([]);
  const { height, width } = useWindowDimensions();

  const controls = useAnimation();

  const [userScrollAmount, setUserScrollAmount] = useState(0);
  const [headerOffset, setHeaderOffset] = useState(0);
  const [headerOnScreen, setHeaderOnScreen] = useState(false);

  useEffect(async () => {
    if (repositories) {
      let newRepos = [];
      repositories.map((repo) => {
        switch (repo.name) {
          case 'Miranda-Moves-Dash':
          case 'Portfolio-v2':
          case 'checkmate':
          case 'GH-Challenges':
            newRepos.push(repo);
            break;
          case 'contactmanager_redux':
            newRepos.splice(2, 0, repo);
            break;
          case 'jerehmegayle-v3':
            newRepos.unshift(repo);
            break;
          default:
            break;
        }
      });
      setRepos(newRepos);
    }
  }, []);

  useEffect(() => {
    // let elem = document.getElementById('code-header');
    // let rect = elem.getBoundingClientRect();
    // console.log('rect :>> ', rect);
    // setHeaderOffset(rect.top);
    const { offsetTop } = headerRef.current;
    setHeaderOffset(offsetTop + 515);
  }, []);

  // Controls event listener for scroll / sticky nav
  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('scroll', handleScrollChange);
    }
    return () => {
      window.removeEventListener('scroll', handleScrollChange);
    };
  }, []);

  useEffect(() => {
    if (headerOnScreen === true) return;
    if (userScrollAmount > headerOffset) {
      setHeaderOnScreen(true);
    }
  }, [userScrollAmount]);

  const handleScrollChange = () => {
    const scrollAmount = window.scrollY;
    setUserScrollAmount(scrollAmount);
  };

  // Animates header in
  useEffect(() => {
    if (headerOnScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.6,
          delay: 0.1,
          ease: 'anticipate',
        },
      });
    }
  }, [headerOnScreen]);

  return (
    <section className='bg-brandGray -mt-40 dark:bg-gray-900 pb-40 px-5'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={controls}
          id='code-header'
          ref={headerRef}
          className='flex flex-wrap flex-row justify-start md:justify-between items-center md:pt-24 mx-0 md:mx-10'>
          <LandingSectionHeader headerName='Latest Code' />
          <motion.div initial={{ opacity: 0, x: 80 }} animate={controls}>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={`https://github.com/${userData.githubUsername}`}
              className='mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg dark:shadow-dark-lg text-xl font-semibold flex flex-row space-x-4 items-center text-brandPrimary dark:text-gray-700 transform hover:scale-95 hover:translate-y-1 hover:!shadow-none transition duration-300 ease-out'>
              <BoxArrowOutRight />
              <p>View GitHub</p>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={controls}
        id='code-header'
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20'>
        {/* Single github Repo */}

        {repos &&
          repos.map((latestRepo, idx) => (
            <GithubRepoCard latestRepo={latestRepo} key={idx} />
          ))}
      </motion.div>
    </section>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className='github-repo'>
      <h1 className='font-semibold text-xl dark:text-gray-200 text-gray-700'>
        {latestRepo.name}
      </h1>
      <p className='text-base font-normal my-4 text-gray-500'>
        {latestRepo.description}
      </p>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={latestRepo.clone_url}
        className='font-semibold group flex flex-row space-x-2 w-full items-center'>
        <p>View Repository </p>
        <div className='transform  group-hover:translate-x-2 transition duration-300'>
          &rarr;
        </div>
      </a>
    </div>
  );
};
