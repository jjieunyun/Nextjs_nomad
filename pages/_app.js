import NavBar from "../components/NavBar";
import "../styles/globals.css";
import Layout from "../components/Layout";

//다른 일반 컴포넌트에서는 css import안됨. 여기만 됨

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        h1 {
          color: blue;
        }
      `}</style>
    </Layout>
  );
}
