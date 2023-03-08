import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { transitionVariants } from '@constants/helperData'

const ContainerBlock = ({ children, ...customMeta }) => {
  const router = useRouter()

  const meta = {
    title: 'Jerehme Gayle - Developer, Designer, Learner, Creator',
    description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
    image: '/img/avatar.jpeg',
    type: 'website',
    ...customMeta,
  }
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Jerehme Gayle' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@Jgayle28' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      <motion.main
        variants={transitionVariants} // Pass the variant object into Framer Motion
        // initial='hidden' // Set the initial state to variants.hidden
        // animate='enter' // Animated state to variants.enter
        exit='exit' // Exit state (used later) to variants.exit
        transition={{ type: 'linear' }} // Set the transition to linear
        className='dark:bg-brandBlack w-full'
      >
        <div>{children}</div>
      </motion.main>
    </div>
  )
}

export default ContainerBlock
