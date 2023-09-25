import { useLocation } from 'react-router';
import PageLayout from '../PageLayout/PageLayout';
import { useRef } from 'react';
import LinkBack from 'components/LinkBack/LinkBack';
import PageName from 'components/PageName/PageName';
import { StyledLinkBackWrapper } from './StyledGalleryPage';

const GalleryPage = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  return (
    <PageLayout pageName="Gallery">
      <StyledLinkBackWrapper>
        <LinkBack backLinkHref={backLinkHref} />
        <PageName name="Gallery" />
      
      </StyledLinkBackWrapper>
    </PageLayout>
  );
};

export default GalleryPage;
