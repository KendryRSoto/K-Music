import Layout from "./Layout";
import Image from "next/image";

function About() {
  return (
    <Layout>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 mt-5">
            <Image src="/images/logo1.png" width={200} height={200} alt="Logo" />
          </div>
          <div className="col-lg-6 mt-4">
            <h1 className="text-center">K Music</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
              asperiores ducimus fugit amet dolor veniam quia inventore
              reprehenderit quos excepturi iusto cumque illo nostrum laudantium
              neque, sed quo est eos.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
