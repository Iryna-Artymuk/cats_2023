import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
  box-sizing:border-box;
}
body{
  font-family: 'Jost', sans-serif;
  font-size: 16px;
  font-weight:400;
  background-color: ${({ theme }) => {
    // console.log(' theme: ',  theme);

    return theme.colors.body_background;
  }};
  color:${({ theme }) => theme.colors.textColor};
  
}
main {
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 140px;
}
input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
  padding: 0;
  border: 0;
  background:transparent;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
  background:transparent;
}
a {
  color: inherit;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul ,li {
  list-style: none;
  padding:0;
  margin:0;
}
img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6,
p{
  font-size: inherit;
  font-weight: 500;
margin:0;
}

img {
  max-width: 100%;
  height: auto;
}

.light {
  background-color: hsl(0, 0%, 93%);
}
.dark {
  background-color: hsl(0, 0%, 20%);
}

.error{
 
color: ${({ theme }) => theme.colors.errorTextColor}
}


  svg{
    fill: ${({ theme }) => theme.colors.accentColor1};  
  }
svg:hover{
  fill: ${({ theme }) => theme.colors.colorWhite}
}


// swiper css  breeds page



.swiper {
  position:relative;
 
  overflow:visible;
  
  width: 295px ;
  height: 166px;



 @media screen and (min-width: 768px) {
   
  width: 640px ;
  height: 360px;
  }
}

 .swiper-wrapper{
 
 display:flex;
 position: relative;
}

.swiper-slide{
  width: 100%;
  height: 100%;
}

.imgWrapper{
  width: 295px ;
  height: 166px;
border-radius:20px;
overflow:hidden;

 @media screen and (min-width: 768px) {
   
  width: 640px ;
  height: 360px;
  }

}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

.swiper-pagination-bullet{
  background-color:  ${({ theme }) => theme.colors.accentColor2} !important;
     width:10px !important;
     height:10px !important;
     border-radius:50%;
     opacity: 1;
     transform: scale(1)

}

.swiper-pagination-bullet-active{
  background-color:  ${({ theme }) => theme.colors.accentColor1} !important;
  opacity:1;
  transform: scale(1);
 
}


/* .swiper-pagination-bullets-dynamic .swiper-pagination-bullet{
  transform: scale(1);
}
.swiper-pagination-hidden{
  display:none;
} */


.swiper-pagination{
  width: auto !important; 
  position: absolute;
  bottom: -15px !important ;
left:50% !important;
  height: 30px;
    background-color:  ${({ theme }) => theme.colors.content_background} ;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
} 



`;
