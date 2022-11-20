import '../scss/styles.scss';
import Head from 'next/head';
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>BMI Creative Project</title>
            </Head>

            {/* <Navbar/> */}

            <div className={`page`}>
                <Component {...pageProps} />
            </div>
        </div>
    )
}

export default MyApp;