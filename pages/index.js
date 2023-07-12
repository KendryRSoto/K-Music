import Layout from "./Layout";
import Carrusel from "./components/Carrusel";
import Service from "./components/Service";
import Blog from "./components/blog";
function home() {
  return (
    <Layout>
      <div className="container-fluid m-10">
        <Carrusel/>
        <Service/>
        <Blog/>
      </div>
    </Layout>
  );
}

export default home;
