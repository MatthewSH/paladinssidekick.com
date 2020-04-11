import Head from 'next/head';

const Header = (props) => (
    <div>
        <Head>
            <title>{ (props.title ? `${props.title} / Paladins Sidekick` : `Pladins Sidekick`) }</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    </div>
)

export default Header;