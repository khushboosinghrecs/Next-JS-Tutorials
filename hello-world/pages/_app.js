import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // console.log(Component, pageProps, 'myApp ')
  return <Component {...pageProps} />
}

export default MyApp
