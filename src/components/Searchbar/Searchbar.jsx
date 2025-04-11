import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  handleSubmit = (values, { resetForm }) => {
    const query = values.searchValue.trim().toLowerCase();
    if (!query) {
      toast.error('Please enter a valid theme');
      return;
    }
    this.props.onSubmit(query);
    resetForm();
  };

  render() {
    return (
      <header className={styles.SearchBar}>
        <Formik initialValues={{ searchValue: '' }} onSubmit={this.handleSubmit}>
          <Form className={styles.SearchForm}>
            <button type="submit" className={styles.SearchFormButton}>
              <ImSearch />
            </button>
            <Field
              name="searchValue"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              className={styles.SearchFormInput}
            />
          </Form>
        </Formik>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
