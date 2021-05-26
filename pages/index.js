import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import HeaderLogo from "../components/HeaderLogo";
import BodyText from "../components/BodyText";
import BodyBox from "../components/BodyBox";
import Social from "../components/Social";
import Footer from "../components/Footer";


function Home() {
  return (
    <div >
      <Head>
        <title>Apeirox</title>
        <meta name="description" content="Connecting Trades" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <HeaderLogo />

      <BodyText />

      <BodyBox />

      <Footer />

    </div>
  )
}

export default Home;
