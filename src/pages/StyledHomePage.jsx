import { styled } from 'styled-components';

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

  height: 900px;

  /* outline: 2px solid blue; */

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
export const StyledContentWrapper = styled.div`
  width: 87.74%;
  height: 93.33%;
  background-color: ${({ theme }) => theme.colors.accentColor2};
  border-radius: 5px;
  margin: 30px 30px 30px 65px;
  /* outline: 2px solid green; */
  @media screen and (max-width: 768px) {
    height: 53.33%;
    margin: 10px 10px 10px 45px;
  }
  img {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
