const contentLeft = {
  color: 'black',
  backgroundColor: 'lightblue',
  borderRadius: '10%',
  maxWidth: '70%',
  borderRadius: 20,
  padding: '8px 12px',
  margin: '5px auto 0px 10px',
  height: 'auto'
};

const styles = {
  contentLeft,
  contentRight: {
    ...contentLeft,
    marginLeft: 'auto',
    marginRight: 10,
    backgroundColor: 'lightgreen'
  },
  text: {
    marginLeft: 'auto',
    wordBreak: 'break-word'
  },
  state: {
    textAlign: 'right',
    width: '100%',
    color: 'grey',
    fontSize: 10,
    height: 'auto'
  },
  image: {
    width: 10,
    height: 10,
    verticalAlign: 'middle'
  }
};

export default styles;
