import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Section from '../../components/section';


export default function Contact() {
    return (
    <Layout>
    <Head>
        <title>Sztudio \ Contact</title>
    </Head>
    
    <Section>
    <h1>First Post</h1>
    </Section>
    <h2>
        <Link href="/">

            <a>Back to home</a>
        </Link>
    </h2>
    </Layout>
    )
  }