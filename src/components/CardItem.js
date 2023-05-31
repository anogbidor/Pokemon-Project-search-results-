// import { pokemons } from "../mock/mockedData";
export default function CardItem({ name, sprite }) {
  return (
    <div className="card-item">
      <h2>{name}</h2>
      <img src={sprite} alt={name} />
    </div>
  );
}
