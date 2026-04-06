import ProposalCard from '../proposal-card/proposal-card';
import {Offer} from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
  cardClassName: string;
  handleHover?: (offerId: string | null) => void;
};

function OffersList({offers, cardClassName, handleHover}: OffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <ProposalCard
          key={offer.id}
          offer={offer}
          cardClassName={cardClassName}
          handleHover={handleHover}
        />
      ))}
    </>
  );
}

export default OffersList;
