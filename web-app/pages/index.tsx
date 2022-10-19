import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/about">
          <a>Go to about</a>
        </Link>
      </li>
      <li>
        <Link href="/content/abc">
          <a>Also goes to pages/content/[id].js</a>
        </Link>
      </li>
    </ul>
  )
}