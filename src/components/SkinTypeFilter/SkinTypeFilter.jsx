import "./SkinTypeFilter.css";

function SkinTypeFilter({ skinType, setSkinType }) {
  return (
    <div className="skin-filter">

      <label>Skin Type</label>

      <select
        value={skinType}
        onChange={(e) => setSkinType(e.target.value)}
      >
        <option value="">All</option>
        <option value="Dry">Dry</option>
        <option value="Oily">Oily</option>
        <option value="Combination">Combination</option>
        <option value="Sensitive">Sensitive</option>
        <option value="Normal">Normal</option>
      </select>

    </div>
  );
}

export default SkinTypeFilter;