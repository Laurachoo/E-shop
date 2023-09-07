import SingleShopCard from './SingleShopCard';

export default function AddCardList(props) {
  return (
    <ul className='grid grid-cols-3 gap-3'>
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
