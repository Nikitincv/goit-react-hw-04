const ImageGallery = ({ images, openModal }) => {
  return (
    <ul>
      {images.map(({ id, alt_description, urls }) => {
        return (
          <li key={id}>
            <div>
              <img
                src={urls.small}
                alt={alt_description}
                onClick={() => openModal(urls.regular)}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
