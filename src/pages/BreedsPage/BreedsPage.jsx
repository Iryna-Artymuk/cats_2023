import PageLayout from 'pages/PageLayout/PageLayout';

import SelectBreeds from 'components/SelectButton/BreedsSelectButton';
import SelectLimit from 'components/SelectButton/LimitSelectButton';
import { StyledSelectWrapper } from './StyledBreedspage';

const BreedsPage = () => {
  return (
    <PageLayout pageName="Breeds">
      <StyledSelectWrapper>
        <SelectBreeds />

        <div>
        <SelectLimit />
        <button>
        <svg width={12} height={12}>
          <use
            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-drop_down`}
          />
        </svg>
        </button>
        <button>
        <svg width={12} height={12}>
          <use
            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-drop_down`}
          />
        </svg>
        </button>
        </div>
     
      </StyledSelectWrapper>
    </PageLayout>
  );
};

export default BreedsPage;
