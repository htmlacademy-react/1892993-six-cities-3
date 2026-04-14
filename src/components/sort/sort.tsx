import { useEffect } from 'react';
import { SortOption } from '../../const';
import { useBololean } from '../../hooks/boolean';
import { SORT_OPTIONS } from '../../const';

type SortProps = {
  current: SortOption;
  setter: (option: SortOption) => void;
}

function Sort({ current, setter }: SortProps): JSX.Element {
  const {isOn, off, toggle} = useBololean(false);
  useEffect(() => {
    if (isOn) {
      const onEscKeyDown = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
          off();
        }
      };

      document.addEventListener('keydown', onEscKeyDown);
      return () => {
        document.removeEventListener('keydown', onEscKeyDown);
      };
    }
  }, [isOn, off]);

  const selectedOption = SORT_OPTIONS[current];

  return (
    <form className="places__sorting" action="#" method="get" onClick={toggle}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedOption}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOn ? 'places__options--opened' : ''}`}>
        {SORT_OPTIONS.map((option, index) => (
          <li
            className={`places__option ${selectedOption === option ? 'places__option--active' : ''}`}
            tabIndex={0}
            key={option}
            onClick={() => setter(index)}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
