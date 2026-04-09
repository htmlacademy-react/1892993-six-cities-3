import ProposalCard from '../proposal-card/proposal-card';
import {Offer} from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
  cardClassName: string;
  onListItemHover?: (id: string | null) => void;
};

function OffersList({offers, cardClassName, onListItemHover}: OffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <ProposalCard
          key={offer.id}
          offer={offer}
          cardClassName={cardClassName}
          handleHover={onListItemHover}
        />
      ))}
    </>
  );
}

export default OffersList;
