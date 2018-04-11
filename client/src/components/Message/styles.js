const contentLeft = {
  color: 'black',
  backgroundColor: 'lightblue',
  borderRadius: '10%',
  maxWidth: '70%',
  borderRadius: 20,
  padding: '8px 12px',
  margin: '5px auto 5px 10px'
};

const styles = {
  contentLeft,
  contentRight: {
    ...contentLeft,
    marginLeft: 'auto',
    marginRight: 10,
    backgroundColor: 'lightgreen',
  },
  span: {
    marginLeft: 'auto',
    wordBreak: 'break-word'
  }
};

export default styles;
