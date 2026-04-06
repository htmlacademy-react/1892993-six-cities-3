type GalleryProps = {
  images: string[];
}

const maxLength = 6;

function Gallery({images}: GalleryProps): JSX.Element {
  if (images.length > maxLength) {
    images.length = maxLength;
  }

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image) => (
          <div className="offer__image-wrapper" key={image}>
            <img className="offer__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
