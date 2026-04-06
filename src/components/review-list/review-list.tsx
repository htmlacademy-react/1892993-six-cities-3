import { Review } from '../../types/review';
import { getDate, getRating } from '../../utils/utils';

type ReviewListProps = {
  reviews: Review[];
}

const maxLength = 10;

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  if (reviews.length > maxLength) {
    reviews.length = maxLength;
  }

  return (
    <ul className="reviews__list">
      {reviews.map((review) =>(
        <li className="reviews__item" key={review.id}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width={54} height={54} alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {review.user.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{'width':`${getRating(review.rating)}`}} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {review.comment}
            </p>
            <time className="reviews__time" dateTime={review.date}>{getDate(review.date)}</time>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ReviewList;
