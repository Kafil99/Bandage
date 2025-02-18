import { Users, Globe2, Building2, Award } from "lucide-react";
import React, { useEffect, useRef } from "react";

export default function StatsSection() {
  const statsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll<HTMLSpanElement>(".stat-number");
            counters.forEach((counter) => {
              const target = parseInt(counter.getAttribute("data-target") || "0", 10); // Default to 0 if null
              const duration = 2000;
              const increment = target / (duration / 16);
              let current = 0;
              const updateCounter = () => {
                if (current < target) {
                  current += increment;
                  counter.textContent =
                    Math.floor(current) +
                    (counter.getAttribute("data-suffix") || "");
                  requestAnimationFrame(updateCounter);
                } else {
                  counter.textContent =
                    target + (counter.getAttribute("data-suffix") || "");
                }
              };
              updateCounter();
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={statsRef} className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center p-6 transition-transform duration-300 hover:scale-105">
            <Users className="w-12 h-12 mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold mb-2">
              <span className="stat-number" data-target="15" data-suffix="K">
                0
              </span>
            </h2>
            <p className="text-gray-600 text-center">Happy Customers</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 transition-transform duration-300 hover:scale-105">
            <Globe2 className="w-12 h-12 mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold mb-2">
              <span className="stat-number" data-target="150" data-suffix="K">
                0
              </span>
            </h2>
            <p className="text-gray-600 text-center">Monthly Visitors</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 transition-transform duration-300 hover:scale-105">
            <Building2 className="w-12 h-12 mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold mb-2">
              <span className="stat-number" data-target="15">
                0
              </span>
            </h2>
            <p className="text-gray-600 text-center">Countries Worldwide</p>
          </div>

          <div className="flex flex-col items-center justify-center p-6 transition-transform duration-300 hover:scale-105">
            <Award className="w-12 h-12 mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold mb-2">
              <span className="stat-number" data-target="100" data-suffix="+">
                0
              </span>
            </h2>
            <p className="text-gray-600 text-center">Top Partners</p>
          </div>
        </div>
      </div>
    </section>
  );
}
