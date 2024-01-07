import { Fira_Code } from 'next/font/google'
import './globals.css'

const font = Fira_Code({ subsets: ['latin'] , weight : '400'})

export const metadata = {
  title: 'Next Js Project ',
  description: ' App using next js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{backgroundColor:'white'}} className={font.className}>{children}</body>
    </html>
  )
}
