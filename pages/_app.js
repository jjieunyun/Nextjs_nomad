import NavBar from "../components/NavBar";
import "../styles/globals.css";

//다른 일반 컴포넌트에서는 css import안됨. 여기만 됨

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>Hello</span>

      <style jsx global>{`
        h1 {
          color: blue;
        }
      `}</style>
    </>
  );
}
