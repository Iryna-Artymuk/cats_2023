import { ROUTES } from 'utils/routes';
import { useLocation } from 'react-router';
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
  StyledLinkBackWrapper,
  StyledOptions,
  StyledSelectWrapper,
} from './StyledBreedspage';
import { SortButton } from 'components/Button/StyledButton';

import breed1 from '../../images/breed1.png';
import breed2 from '../../images/breed2.png';
import defaultImg from '../../images/default.jpg';
import LinkBack from 'components/LinkBack/LinkBack';
import PageName from 'components/PageName/PageName';

const BreedsPage = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  console.log('backLinkHref : ', backLinkHref);

  return (
    <PageLayout>
      <StyledOptions>
        <StyledLinkBackWrapper>
          <LinkBack backLinkHref={backLinkHref} />
          <PageName name="Breeds" />
        </StyledLinkBackWrapper>

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
          <Link
            title=" link to breeds details"
            state={{ from: location }}
            to={ROUTES.BREEDSdetails}
          >
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
