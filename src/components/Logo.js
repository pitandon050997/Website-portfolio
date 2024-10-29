import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

let MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-2'>
      <MotionLink
        href="/"
        className='flex items-center justify-center rounded w-34 h-8 bg-dark text-white dark:border-2 dark:border-solid dark:border-light text-2xl font-bold whitespace-nowrap'
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        Piyush Tandon
      </MotionLink>
    </div>
  );
};

export default Logo;
