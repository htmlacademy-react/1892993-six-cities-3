import { Review } from '../../types/review';
import { AuthorizationStatus } from '../../const';
import ReviewList from '../review-list/review-list';
import ReviewForm from '../review-form/review-form';

type ReviewsProps = {
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
}

function Reviews({reviews, authorizationStatus}: ReviewsProps): JSX.Element {
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewList reviews={reviews}/>
      {isAuth && <ReviewForm />}
    </section>
  );
}

export default Reviews;
