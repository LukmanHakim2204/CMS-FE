import client1 from "../styles/assets/img/clients/client-1.png";
import client2 from "../styles/assets/img/clients/client-2.png";
import client3 from "../styles/assets/img/clients/client-3.png";
import client4 from "../styles/assets/img/clients/client-4.png";
import client5 from "../styles/assets/img/clients/client-5.png";
import client6 from "../styles/assets/img/clients/client-6.png";
import client7 from "../styles/assets/img/clients/client-7.png";
import client8 from "../styles/assets/img/clients/client-8.png";

const Clients = () => {
  const clientLogos = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
  ];

  return (
    <section id="clients" className="clients section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0 clients-wrap">
          {clientLogos.map((logo, index) => (
            <div key={index} className="col-xl-3 col-md-4 client-logo">
              <img
                src={logo}
                className="img-fluid"
                alt={`Client ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
