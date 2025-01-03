import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import UWlogo from "../../public/images/profile/UW Logo.png";
import profilePic from "../../public/images/profile/ProfilePic14.png";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Piyush Tandon</title>
        <meta name="description" content="Piyush's Portfolio" />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-5  md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/ lg:hidden md:inline-block md:w-full order-last lg:order-none sm:flex sm:justify-center">
              <Image
                src={profilePic}
                alt="Piyush"
                className="h-auto w-auto sm:block sm:mb-5" 
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center sm:mt-5"> 
              <AnimatedText
                text="Namaste🙏 World!"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                I believe in the power of engineering to change the world. Every
                challenge is an opportunity to innovate, and every idea has the
                potential to transform our future. By merging technology and
                design, I strive to build solutions that inspire, uplift, and
                empower. Let &apos;s create a legacy of progress and make the
                impossible possible—together.
              </p>
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                  Explore my journey, discover my projects, and be a part of my life that redefines what engineering can achieve.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="/Piyush Resume.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:piyush.tandon321@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image className="relative h-auto w-full" src={UWlogo} alt="UWlogo" />
        </div>
      </article>
    </>
  );
}
