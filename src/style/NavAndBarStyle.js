import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  card: {
    margin: '0 5px 0 5px'
  },
  appBar: {
    display: 'flex',
    zIndex: '1',
    height: '100%'
  }
}));