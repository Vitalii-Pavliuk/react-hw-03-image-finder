import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchImagesByValue } from '../../servises/pixabayAPI';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import styles from './ImageGallery.module.css';
import { Button } from 'components/Button';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue } = this.props;
    const { page } = this.state;

    if (prevProps.searchValue !== searchValue) {
      this.setState({ images: [], page: 1, error: null }, this.fetchImages);
    } else if (prevState.page !== page && page !== 1) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { searchValue } = this.props;
    const { page, images } = this.state;

    this.setState({ loading: true });
    try {
      const newImages = await fetchImagesByValue(searchValue, page);
      this.setState({
        images: [...images, ...newImages],
        loading: false,
      });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { images, loading, error } = this.state;

    return (
      <div>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        <ul className={styles.ImageGallery}>
          {images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
        </ul>

        {loading && <Loader />}

        {!loading && images.length > 0 && (
          <Button onClick={this.handleLoadMore}/>
        )}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  searchValue: PropTypes.string.isRequired,
};

export default ImageGallery;
