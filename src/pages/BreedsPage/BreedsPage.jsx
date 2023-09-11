import PageLayout from 'pages/PageLayout/PageLayout';

import SelectBreeds from 'components/SelectButton/BreedsSelectButton';
import SelectLimit from 'components/SelectButton/LimitSelectButton';
import { StyledLimitWrapper, StyledSelectWrapper } from './StyledBreedspage';
import { SortButton } from 'components/Button/StyledButton';

const BreedsPage = () => {
  return (
    <PageLayout pageName="Breeds">
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
    </PageLayout>
  );
};

export default BreedsPage;
