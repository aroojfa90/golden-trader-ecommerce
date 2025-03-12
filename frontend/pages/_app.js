import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/globalStyles'
import { CartProvider } from '../context/CartContext'
import '../styles/globals.css'

const theme = {
  colors: {
    primary: '#b8860b',
    text: '#333',
    background: '#fff',
    accent: '#1a1a1a',
  },
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Playfair Display', serif",
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  )
}

export default MyApp
