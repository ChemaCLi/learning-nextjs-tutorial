import Link from 'next/link'
import Head from 'next/head'
import { ProfileImage } from '../../components/profile-image'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <ProfileImage />
      <h2>
        {/*
         the page wrapped with Link is automatically prefetched
         in the background to move on it faster
        */}
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <style jsx>{`
        h1 {
          font-family: Arial;
        }

        h2 {
          font-family: Arial;
        }
      `}</style>
    </>
  )
}
