import localFont from 'next/font/local'

export const canava = localFont({
  src: [
    {
      path: '../../public/fonts/CanavaGroteskRegular.otf',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-canava-grotesk',
  display: 'swap',
})

export const Garacie = localFont({
  src: [
    {
      path: '../../public/fonts/GaracieRegular.otf',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-garacie',
  display: 'swap',
})