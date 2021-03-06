import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Comforter&family=Open+Sans:wght@400;700&family=Poppins:wght@400;500;600&family=Roboto:wght@400;500;700&display=swap');

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root{
  height: 100%;
}

body{
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  background: #ecf1f8;
  color: #333;
  -webkit-font-smoothing: antialiased !important;
}

ul{
  list-style: none;
}
`

