import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '185px',
    // backgroundColor: '#E3F2FD'
  },
  card: {
    margin: '0 5px 0 5px'
  },
  appBar: {
    display: 'flex',
    zIndex: '1',
    height: '100%'
  },
  circlebefore: {
    position: 'absolute',
    width: '210px',
    height: '210px',
    opacity: '0.5',
    top: '-125px',
    right: '-15px',
  },
  circleafter: {
    position: 'absolute',
    width: '210px',
    height: '210px',
    borderRadius: '50%',
    top: '-85px',
    right: '-95px',
  },
  circlebeforemini: {
    position: 'absolute',
    width: '210px',
    height: '210px',
    opacity: '0.5',
    top: '-160px',
    right: '-130px',
  },
  circleaftermini: {
    position: 'absolute',
    width: '210px',
    height: '210px',
    borderRadius: '50%',
    top: '-30px',
    right: '-180px',
  }
}));