import { useAppDispatch } from '../../hooks';
import { changeStatusAction } from '../../store/api-actions';
import { TFullOffer } from '../../types/offers-types';
import BookMarkComponent from '../book-mark-component/book-mark-component';

type FavoriteArticleProps = {
  currentFavorite: TFullOffer;
}

function FavoriteArticleComponent({ currentFavorite }: FavoriteArticleProps): JSX.Element {
  const { id, price, isFavorite } = currentFavorite;

  const dispatch = useAppDispatch();

  const handleFavBookMarkClick = () => {
    dispatch(changeStatusAction({id, isFavorite}));
  };

  return (
    <article className="favorites__card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src="img/apartment-small-03.jpg" width={150} height={110} alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <BookMarkComponent isFavorite={isFavorite} onBookMarkClick={handleFavBookMarkClick}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '100%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Nice, cozy, warm big bed apartment</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default FavoriteArticleComponent;
