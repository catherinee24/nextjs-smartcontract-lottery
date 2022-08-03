import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
//import ManualHeader from "../components/ManualHeader"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Our First WEB3 Lottery</title>
                <meta name="description" content="Our First web3 lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*<ManualHeader/>*/}
            <Header />
            <LotteryEntrance />
            {/** ManualHeader / connect button / nav bar */}
        </div>
    )
}
