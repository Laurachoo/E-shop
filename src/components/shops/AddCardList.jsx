import SingleAddCard from './SingleAddCard';

export default function AddCardList(props) {
  return (
    <ul className='grid grid-cols-3 gap-3'>
      {props.list.map((addObj) => (
        <SingleAddCard
          key={addObj.id}
          item={addObj}
          onDelete={() => props.onDelete(addObj.id)}
        />
      ))}
    </ul>
  );
}
