import { styled } from 'styled-components';

// export const StyledWrapper = styled.div`
//   position: relative;
//   width: 775px;
//   height: 900px;
//   padding: 30px 30px 30px 65px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   outline: 2px solid blue;
//   background-image: url("`${homePageImg}`");
// `;

export const StyledWrapper = styled.div`
  /* background-image: ${props => {
    console.log('props.img ', props.homepageimg);
    return `url('${props.homepageimg}')`;
  }};
  background-repeat: no-repeat;
  background-position: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 775px;
  min-height: 100%;
  height: 900px;
  padding: 30px 30px 30px 65px;
  @media screen and (max-width: 768px) {
    padding: 10px 10px 10px 25px;
  }

  /* outline: 2px solid blue; */
`;
export const StyledContentWrapper = styled.div`
  width: 82.5%;
  height: 93.3%;
  background-color: ${({ theme }) => theme.colors.accentColor2};
  border-radius: 5px;
  /* outline: 2px solid green; */
  img {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
