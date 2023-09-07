import { Link } from 'react-router-dom';
import { useAuth } from '../../store/AuthProvider';

export default function SingleShopCard(props) {
  const ctx = useAuth();
  const { id, title, price, userUid, stock } = props.item;

  const isMine = userUid === ctx.userUid ? true : false;

  return (
    <li
      className={`border-[1px] px-4 py-3 inline-block ${
        isMine ? 'shadow-md bg-amber-100' : ''
      }`}
    >
      <h2 className='font-bold text-2xl'>{title}</h2>
      <p>{price}eur</p>
      <p className='text-lg font-semibold'>in stock {stock}</p>
      <p>userUid: {userUid}</p>
      <Link
        className='border border-slate-200 px-2 py-1 mt-3 inline-block bg-slate-600 text-white'
        to={`/shops/${id}`}
      >
        Read more
      </Link>
      {isMine && (
        <button
          onClick={props.onDelete}
          className='border border-slate-200 px-2 py-1 mt-3 inline-block bg-red-600 text-white'
        >
          delete
        </button>
      )}
    </li>
  );
}
