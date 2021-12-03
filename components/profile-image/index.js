import Image from 'next/image'

export const ProfileImage = () => (
  <Image
    src="/images/profile.jpeg"
    height={144}
    width={144}
    alt="Profile Photo" />
)
