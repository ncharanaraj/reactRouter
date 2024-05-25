import { useParams } from "react-router-dom";
import phoneDB from "./phoneDB";

export default function Product() {
  const { productID } = useParams();

  const findProduct = phoneDB.data.find(({ id }) => id === productID);
  const { name } = findProduct;

  return (
    <div className="App">
      <h1>{name}</h1>;
    </div>
  );
}
