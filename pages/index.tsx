import Head from 'next/head';

import Navbar from '../components/Navbar';
import Main from '../sections/Main';
import About from '../sections/About';
import Contact from '../sections/Contact';

export default function Home() {
   return (
      <>
         <Head>
            <title>Kevin | Front-End Developer</title>
            <meta content="Kevin Soruco web" name="personal web" />
            <meta
               content="width=device-width, initial-scale=1"
               name="viewport"
            />
            <link href="/favicon.ico" rel="icon" />
         </Head>
         <Navbar />
         <Main />
         <About />
         <Contact />
         <p className="text-sm  p-3 opacity-50 text-center">
            &copy; {new Date().getFullYear()} Kevin Soruco. All rights reserved.
         </p>
      </>
   );
}
