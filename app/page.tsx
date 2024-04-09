import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div>this is a screen for autheticated users onlly</div>
      <UserButton />
    </div>
  )
}
