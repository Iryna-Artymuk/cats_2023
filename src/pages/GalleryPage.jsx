import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledWrapper } from './StyledHomePage';
import SearchForm from 'components/Forms/SearchForm';
import { Box } from './StyledBreedspage';

const GalleryPage = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  return (
    <Box>
      <SearchForm></SearchForm>
      <div>
        <Link to={backLinkHref.current}>
          <span>
            <svg width={24} height={24}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#arrow`} />
            </svg>
          </span>
        </Link>
      </div>
      <div>Gallery</div>
    </Box>
  );
};

export default GalleryPage;
