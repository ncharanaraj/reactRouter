import { Link } from "react-router-dom";
import phoneDB from "./phoneDB.js";

export default function Category() {
  return (
    <div className="App">
      <h1>This is a Category page</h1>;
      <div>
        {phoneDB.data.map(({ id, name, memory, price }) => (
          <div key={id}>
            <h2>{name}</h2>
            <p>{price}</p>
            <Link to={`/product/${id}`}>View Details </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
