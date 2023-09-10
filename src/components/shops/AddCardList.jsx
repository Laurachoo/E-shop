import SingleShopCard from './SingleShopCard';
import AddCardListStyle from '../shops/AddCardList.module.css';

export default function AddCardList(props) {
  return (
    <div className={AddCardListStyle.articleElements}>
      {props.list.map((addObj) => (
        <SingleShopCard
          key={addObj.id}
          item={addObj}
          onDelete={() => props.onDelete(addObj.id)}
        />
      ))}
    </div>
  );
}
