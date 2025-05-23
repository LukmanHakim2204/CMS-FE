import { useState, useEffect, useRef } from "react";
import statsBg from "../styles/assets/img/stats-bg.jpg";

interface StatData {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const Stats = () => {
  const [counters, setCounters] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const statsData: StatData[] = [
    { target: 232, label: "Clients" },
    { target: 521, label: "Projects" },
    { target: 1453, label: "Hours Of Support" },
    { target: 32, label: "Workers" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    statsData.forEach((stat, index) => {
      let current = 0;
      const increment = stat.target / 100;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }

        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 20);
    });
  };

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative min-h-screen bg-gray-900 text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${statsBg})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              What we have achieved so far
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Iusto et labore modi qui sapiente expedita tempora et aut non
              ipsum consequatur illo.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <div
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full 
                              transform transition-all duration-300 
                              hover:scale-105 hover:bg-white/20
                              border border-white/20"
                >
                  <div className="mb-4">
                    <span
                      className="text-4xl md:text-5xl font-bold text-orange-400 
                                   block transition-colors duration-300 group-hover:text-orange-300"
                    >
                      {stat.prefix}
                      {counters[index]}
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
