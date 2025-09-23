'use client'
import { useParams } from 'next/navigation'

export default function Profile() {
  const params = useParams()

  return <main>Profile Page #{params!.id}</main>
}
