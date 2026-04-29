import { Apple } from "lucide-react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero-container">

      <div className="hero-inner">

        <h1 className="hero-title">
          The Safest Way to <br />
          Shop for Groceries
        </h1>

        <p className="hero-subtitle">
          Use the Olive Food Scanner App to Instantly Eliminate <br />
          Harmful Ingredients from Your Family's Diet and Get <br />
          Expert-Backed Food Insights
        </p>

        <div className="hero-buttons">
          <a
            href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn"
          >
            <Apple size={18} />
            Download for iOS
          </a>

           {/* COMMUNITY LINK */}
          <a href="#" className="community-link">
            Join the Olive Community →
          </a>
        </div>

      </div>

    </section>
  );
}