import { Offer } from '../../types/offer';
import {Link, generatePath} from 'react-router-dom';
import { AppRoute } from '../../const';
import { getRating } from '../../utils/utils';

type ProposalCardScreenProps = {
  offer: Offer;
  cardClassName: string;
  handleHover?: (offerId: string | null) => void;
}

function ProposalCard ({offer, cardClassName, handleHover}: ProposalCardScreenProps): JSX.Element {
  const {id, price, title, type, rating, previewImage, isFavorite, isPremium} = offer;
  const offerPath = generatePath(AppRoute.Offer, {id: String(id)});
  const imageWidth = cardClassName === 'favorites' ? 150 : 260;
  const imageHeight = cardClassName === 'favorites' ? 110 : 200;

  const handleMouseOn = () => {
    handleHover?.(id);
  };

  return (
    <article className={`${cardClassName}__card place-card`}
      onMouseEnter={handleMouseOn}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${cardClassName}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerPath}>
          <img className="place-card__image" src={previewImage} width={imageWidth} height={imageHeight} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`
            place-card__bookmark-button
            button
            ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{'width':`${getRating(rating)}`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerPath}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default ProposalCard;
