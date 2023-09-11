import { useAuth } from '../../store/AuthProvider';
import SingleShopCardStyle from '../shops/SingleShopCard.module.css';

export default function SingleShopCard(props) {
  const ctx = useAuth();
  const { description, imageUrl, shopName, startYear, town, userUid } =
    props.item;
  const isMine = userUid === ctx.userUid ? true : false;
  return (
    <article
      className={`${SingleShopCardStyle.articleElement} ${
        isMine ? 'mine' : ''
      }`}
    >
      <div className={SingleShopCardStyle.articleHead}>
        <img
          className={SingleShopCardStyle.shopImage}
          src={imageUrl}
          alt='Shop Image'
        />
      </div>
      <div className={SingleShopCardStyle.scrollDescription}>
        <h2 className={SingleShopCardStyle.shopName}>{shopName}</h2>
        <div className={SingleShopCardStyle.descriptionContainer}>
          <p className={SingleShopCardStyle.startYear}>
            <b>Start Year</b>
          </p>
          <p className={SingleShopCardStyle.startYearValue}>{startYear}</p>
        </div>
        <div className={SingleShopCardStyle.descriptionContainer}>
          <p className={SingleShopCardStyle.town}>
            <b>Town</b>
          </p>
          <p className={SingleShopCardStyle.townValue}>{town}</p>
        </div>
        <div className={SingleShopCardStyle.descriptionContainerSpecial}>
          <p className={SingleShopCardStyle.description}>
            <b>Description</b>
          </p>
          <p className={SingleShopCardStyle.descriptionValue}>{description}</p>
        </div>
        {isMine && (
          <button
            className={SingleShopCardStyle.button}
            onClick={props.onDelete}
          >
            Delete
          </button>
        )}
      </div>
    </article>
  );
}
