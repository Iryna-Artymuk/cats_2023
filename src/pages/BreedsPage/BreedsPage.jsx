import { ROUTES } from 'utils/routes';
import { Outlet, useLocation } from 'react-router';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

//----components----
import PageLayout from 'pages/PageLayout/PageLayout';

import SelectBreeds from 'components/SelectButton/BreedsSelectButton';
import SelectLimit from 'components/SelectButton/LimitSelectButton';

import {
  StyledBreedsList,
  StyledImgWraper,
  StyledLimitWrapper,
  StyledLinkBack,
  StyledOptions,
  StyledPageName,
  StyledSelectWrapper,
} from './StyledBreedspage';
import { SortButton } from 'components/Button/StyledButton';

import breed1 from '../../images/breed1.png';
import breed2 from '../../images/breed2.png';
import defaultImg from '../../images/default.jpg';

const BreedsPage = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  return (
    <PageLayout pageName="Breeds">
      <StyledOptions>
        <div>
          <StyledLinkBack to={backLinkHref.current}>
            <span>
              <svg width={24} height={24}>
                <use
                  xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-arrow-back`}
                />
              </svg>
            </span>
          </StyledLinkBack>
          <StyledPageName>Breeds</StyledPageName>
        </div>

        <StyledSelectWrapper>
          <SelectBreeds />
          <StyledLimitWrapper>
            <SelectLimit />
            <SortButton>
              <svg>
                <use
                  xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon_sortAtoB`}
                />
              </svg>
            </SortButton>
            <SortButton>
              <svg>
                <use
                  xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon_sortBtoA`}
                />
              </svg>
            </SortButton>
          </StyledLimitWrapper>
        </StyledSelectWrapper>
      </StyledOptions>

      <StyledBreedsList>
        <li>
          <Link state={{ from: location }} to={ROUTES.BREEDSdetails}>
            <StyledImgWraper>
              <div className="overlay">
                <p>breds name</p>
              </div>
              <img src={breed1 || defaultImg} alt="breed1" />
            </StyledImgWraper>
          </Link>
        </li>
        <li>
          <Link state={{ from: location }} to={ROUTES.BREEDSdetails}>
            <StyledImgWraper>
              <div className="overlay">
                <p>breds name</p>
              </div>
              <img src={breed2 || defaultImg} alt="breed1" />
            </StyledImgWraper>
          </Link>
        </li>
      </StyledBreedsList>
    </PageLayout>
  );
};

export default BreedsPage;
