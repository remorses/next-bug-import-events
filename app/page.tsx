import Image from 'next/image'
import { Sema } from 'async-sema'
import events from 'events'
console.log({ events })

export const config = { runtime: 'experimental-edge' }

export const runtime = 'edge'

export default function Home() {
    const sema = new Sema(1)
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
          
        </main>
    )
}
