import SingleShopCard from './SingleShopCard';

export default function AddCardList(props) {
  return (
    <ul>
      {props.list.map((addObj) => (
        <SingleShopCard
          key={addObj.id}
          item={addObj}
          onDelete={() => props.onDelete(addObj.id)}
        />
      ))}
    </ul>
  );
}
