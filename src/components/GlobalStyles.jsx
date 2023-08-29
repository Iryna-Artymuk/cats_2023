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

`;
