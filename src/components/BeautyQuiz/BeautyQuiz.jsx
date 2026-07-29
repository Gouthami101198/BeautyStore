import "./BeautyQuiz.css";
import { useState } from "react";

function BeautyQuiz() {

  const [skin, setSkin] = useState("");

  return (
    <section className="quiz">

      <h2>Beauty Quiz</h2>

      <p>Choose your skin type</p>

      <select
        value={skin}
        onChange={(e)=>setSkin(e.target.value)}
      >
        <option>Choose</option>
        <option>Dry</option>
        <option>Oily</option>
        <option>Combination</option>
        <option>Sensitive</option>
      </select>

      {skin && (
        <h3>Recommended for {skin} Skin</h3>
      )}

    </section>
  );
}

export default BeautyQuiz;