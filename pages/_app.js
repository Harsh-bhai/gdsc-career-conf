import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
