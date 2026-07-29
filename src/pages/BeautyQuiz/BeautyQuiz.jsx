import "./BeautyQuiz.css";

import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Recommendation from "../../components/Recommendation/Recommendation";

function BeautyQuiz() {
  const [answers, setAnswers] = useState({
    skinType: "",
    concern: "",
    routine: "",
  });

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const getRecommendation = () => {
    if (answers.skinType === "Dry") {
      return "Hydrating Moisturizer & Hyaluronic Acid Serum";
    }

    if (answers.skinType === "Oily") {
      return "Oil-Free Cleanser & Niacinamide Serum";
    }

    if (answers.skinType === "Combination") {
      return "Balancing Face Wash & Gel Moisturizer";
    }

    if (answers.skinType === "Sensitive") {
      return "Gentle Cleanser & Ceramide Cream";
    }

    return "Complete Beauty Essentials Kit";
  };

  return (
    <>
      <Navbar />

      <section className="beauty-quiz-page">

        <div className="quiz-container">

          <h1>Beauty Quiz</h1>

          <p>
            Answer a few questions to discover the perfect products for your skin.
          </p>

          <div className="quiz-form">

            <label>1. What is your skin type?</label>

            <select
              name="skinType"
              value={answers.skinType}
              onChange={handleChange}
            >
              <option value="">Select Skin Type</option>
              <option value="Dry">Dry</option>
              <option value="Oily">Oily</option>
              <option value="Combination">Combination</option>
              <option value="Sensitive">Sensitive</option>
              <option value="Normal">Normal</option>
            </select>

            <label>2. What is your biggest skin concern?</label>

            <select
              name="concern"
              value={answers.concern}
              onChange={handleChange}
            >
              <option value="">Select Concern</option>
              <option>Acne</option>
              <option>Dark Spots</option>
              <option>Dryness</option>
              <option>Fine Lines</option>
              <option>Dull Skin</option>
            </select>

            <label>3. How often do you follow a skincare routine?</label>

            <select
              name="routine"
              value={answers.routine}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Daily</option>
              <option>Sometimes</option>
              <option>Rarely</option>
            </select>

            {answers.skinType && (
              <div className="quiz-result">

                <h2>Your Recommendation</h2>

                <p>{getRecommendation()}</p>

              </div>
            )}

          </div>

        </div>

        <Recommendation />

      </section>

      <Footer />
    </>
  );
}

export default BeautyQuiz;