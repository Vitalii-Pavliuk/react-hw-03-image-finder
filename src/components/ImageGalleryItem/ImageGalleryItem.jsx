// src/ImageGalleryItem/ImageGalleryItem.jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  handleClick = () => {
    // тут можна, наприклад, відкрити модалку з великим зображенням
    // this.props.onImageClick(this.props.image.largeImageURL);
  };

  render() {
    const { webformatURL, tags } = this.props.image;

    return (
      <li className={styles.GalleryItem} onClick={this.handleClick}>
        <img
          src={webformatURL}
          alt={tags}
          className={styles.GalleryItemImage}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }).isRequired,
};

export default ImageGalleryItem;
