import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link
          href="https://bootswatch.com/5/zephyr/bootstrap.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      <Navbar />
      <div className="container-fluid">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
