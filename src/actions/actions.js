const clickCell = cellId => {
    console.log(cellId);
    return {
      type: 'CLICK_CELL',
      id: cellId,
    }
  }

export default clickCell;