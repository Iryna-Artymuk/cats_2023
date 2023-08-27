import React from 'react';
import { SerchFormWrapper, StyledForm } from './StyledSearchForm';

const SearchForm = () => {
  return (
    <SerchFormWrapper>
      <StyledForm>
        <input type="text" placeholder="Search for breeds by name" />
        <button title="search" type="submit">
          <svg width={20} height={20}>
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-search`}
            />
          </svg>
        </button>
      </StyledForm>
    </SerchFormWrapper>
  );
};

export default SearchForm;
