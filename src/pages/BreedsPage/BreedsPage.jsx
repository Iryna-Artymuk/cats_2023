import { ROUTES } from 'utils/routes';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

//----components----
import PageLayout from 'pages/PageLayout/PageLayout';

import SelectBreeds from 'components/SelectButton/BreedsSelectButton';
import SelectLimit from 'components/SelectButton/LimitSelectButton';
import {
  StyledBreedsList,
  StyledLimitWrapper,
  StyledSelectWrapper,
} from './StyledBreedspage';
import { SortButton } from 'components/Button/StyledButton';

import breed1 from '../../images/breed1.png';
import breed2 from '../../images/breed2.png';
import defaultImg from '../../images/default.jpg';
const BreedsPage = () => {
  const location = useLocation();
  return (
    <PageLayout pageName="Breeds">
      <StyledSelectWrapper>
        <Outlet />
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
        <StyledBreedsList>
          <Link state={{ from: location }} to={ROUTES.BREEDSdetails}>
            <li>
              <img src={breed1 || defaultImg} alt="breed1" />
            </li>
          </Link>
          <Link state={{ from: location }} to={ROUTES.BREEDSdetails}>
            <li>
              <img src={breed2 || defaultImg} alt=" breed2" />
            </li>
          </Link>
        </StyledBreedsList>
      </StyledSelectWrapper>
    </PageLayout>
  );
};

export default BreedsPage;
