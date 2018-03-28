const contentLeft = {
  color: 'black',
  backgroundColor: 'lightblue',
  height: 40,
  margin: 10,
  width: 'min-content',
  borderRadius: '10%' 
};

const styles = {
  contentLeft,
  contentRight: {
    ...contentLeft,
    marginLeft: 'auto',
    backgroundColor: 'lightgreen'
  },
  span: {
    width: '100%'
  }
};

export default styles;