import statsBg from "../styles/assets/img/stats-bg.jpg";
import { useEffect } from "react";
import "../styles/assets/vendor/purecounter/purecounter_vanilla.js";

const Stats = () => {
  useEffect(() => {
    // Akses PureCounter melalui window object
    if (typeof (window as any).PureCounter !== "undefined") {
      new (window as any).PureCounter();
    }
  }, []);

  const statsData = [
    { end: 232, label: "Clients" },
    { end: 521, label: "Projects" },
    { end: 1453, label: "Hours Of Support" },
    { end: 32, label: "Workers" },
  ];

  return (
    <section id="stats" className="stats section dark-background">
      <img src={statsBg} alt="" data-aos="fade-in" />

      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="subheading">
          <h3>What we have achieved so far</h3>
          <p>
            Iusto et labore modi qui sapiente expedita tempora et aut non ipsum
            consequatur illo.
          </p>
        </div>

        <div className="row gy-4">
          {statsData.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end={stat.end}
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
