import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: '100%',
    width: '100%',
    maxWidth: '100%',
    minHeight: 600,
    padding: theme.spacing(4),
    alignItems: 'center',
    alignContent: 'center',
    margin: 'auto',
    flexDirection: 'row',
  },
  passwordInput: {
    textSecurity: 'disc',
  },
  errorDiv: {
    paddingLeft: '10px',
    width: '100%',
    color: 'red',
    minHeight: '50px',
    lineHeight: '50px',
    backgroundColor: '#FDE6E5',
  },
  errorText: {
  },
  paddingTop: {
    marginTop: '100px',
  },
  inputWithHint: {
    backgroundColor: 'red',
    display: 'flex',
  },
  inputError: {
    border: '1px solid red',
  },
  textError: {
    fontSize: '0.8rem',
    color: 'red',
  },
  privateKeyTextInput: {
    marginBottom: '10px',
  },
  doneIcon: {
    color: 'green',
    float: 'left',
  },
  badFormat: {
    color: 'red',
    float: 'left',
  },
  fileNameText: {
    textAlign: 'left',
  },
  clearIcon: {
    float: 'right',
  },
  fileContainer: {
    display: 'flex',
    padding: '10px',
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    alignContent: 'center',
    height: '50px',
    border: 'dashed thin gray',
  },
  guideStepsContainerPaper: {
    cursor: 'pointer',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'aliceblue',
    },
  },
  bigSquareButton: {
    minHeight: 150,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  bigSquareButtonGrid: {
    margin: 'auto',
    textAlign: 'center',
  },
  bigSquareButtonIcon: {
    width: 30,
    height: 30,
    maxWidth: 30,
    maxHeight: 30,
    margin: 'auto',
  },
  gridContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    // marginTop: 50,
  },
  rowGridContainer: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  guideStep: {
    marginBottom: theme.spacing(1),
  },
  guideStepText: {
    fontSize: 14,
  },
  arrowIcon: {
    float: 'right',
    marginLeft: 'auto',
    marginRight: theme.spacing(1),
    alignSelf: 'center',
    marginTop: theme.spacing(1),
  },
}));

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptopM: '960px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const mediaQueryDevices = {
  mobileS: `min-width: ${size.mobileS}`,
  mobileM: `min-width: ${size.mobileM}`,
  mobileL: `min-width: ${size.mobileL}`,
  tablet: `min-width: ${size.tablet}`,
  laptop: `min-width: ${size.laptop}`,
  laptopM: `min-width: ${size.laptopM}`,
  laptopL: `min-width: ${size.laptopL}`,
  desktop: `min-width: ${size.desktop}`,
  desktopL: `min-width: ${size.desktop}`,
};
