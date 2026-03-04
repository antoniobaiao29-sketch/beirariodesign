import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Cristina Frade — Solicitadora',
  description: 'Escritório de Solicitadoria em Coimbra. Serviços jurídicos e administrativos de qualidade desde 1992.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
