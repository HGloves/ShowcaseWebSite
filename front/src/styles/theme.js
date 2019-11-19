import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#1C3956',
    },
    secondary: {
        main: '#AF8F61',
    },
  },
  typography: {
      fontFamily: "'Open Sans', sans-serif"
  }
});

export default theme;