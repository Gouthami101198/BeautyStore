import "./ProductComparison.css";

function ProductComparison() {
  return (
    <section className="comparison">

      <h2>Product Comparison</h2>

      <table>

        <thead>
          <tr>
            <th>Feature</th>
            <th>Vitamin C Serum</th>
            <th>Hydrating Cream</th>
            
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Price</td>
            <td>$29.99</td>
            <td>$34.99</td>
          </tr>

          <tr>
            <td>Rating</td>
            <td>4.8 ⭐</td>
            <td>4.9 ⭐</td>
          </tr>

          <tr>
            <td>Skin Type</td>
            <td>All Skin</td>
            <td>Dry Skin</td>
          </tr>

          <tr>
            <td>Size</td>
            <td>30 ml</td>
            <td>50 ml</td>
          </tr>

        </tbody>

      </table>

    </section>
  );
}

export default ProductComparison;