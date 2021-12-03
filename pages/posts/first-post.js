import Link from 'next/link'
import { ProfileImage } from '../../components/profile-image'

export default function FirstPost() {
  return (
    <>
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
    </>
  )
}
