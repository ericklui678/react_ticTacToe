import React, { Component } from 'react';
import Cell from './cell';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      toggleXandO: 'O',
      win: false
    };
    // this binding is necessary to make 'this' work in the callback
    this.cellClicked = this.cellClicked.bind(this);
  }

  cellClicked(val) {
    // if cell already has value or game is already won, prevent cell updates
    if (this.state.board[val] || this.state.win) return;

    let updatedBoard = this.state.board.slice();
    updatedBoard[val] = this.state.toggleXandO;
    if (!this.checkWin(updatedBoard)) {
      this.setState({toggleXandO: this.state.toggleXandO === 'O' ? 'X' : 'O'})
    }
    this.setState({board: updatedBoard});
  }

  checkWin(board) {
    const win = {
      'row1': board[0] && board[0] == board[1] && board[1] == board[2],
      'row2': board[3] && board[3] == board[4] && board[4] == board[5],
      'row3': board[6] && board[6] == board[7] && board[7] == board[8],
      'col1': board[0] && board[0] == board[3] && board[3] == board[6],
      'col2': board[1] && board[1] == board[4] && board[4] == board[7],
      'col3': board[2] && board[2] == board[5] && board[5] == board[8],
      'diag1': board[0] && board[0] == board[4] && board[4] == board[8],
      'diag2': board[2] && board[2] == board[4] && board[4] == board[6]
    }
    if (win.row1 || win.row2 || win.row3 || win.col1 || win.col2 || win.col3 || win.diag1 || win.diag2) {
      this.setState({win: true})
      return true;
    }
    return false;
  }

  render() {
    let textHeader;
    if (this.state.win) textHeader = `Winner: ${this.state.toggleXandO}`;
    else textHeader = `Your turn: ${this.state.toggleXandO}`

    return (
      <div>
        <h1>{textHeader}</h1>
        <div className='row'>
          <Cell id='0' value={this.state.board[0]} onClick={this.cellClicked}/>
          <Cell id='1' value={this.state.board[1]} onClick={this.cellClicked}/>
          <Cell id='2' value={this.state.board[2]} onClick={this.cellClicked}/>
        </div>
        <div className='row'>
          <Cell id='3' value={this.state.board[3]} onClick={this.cellClicked}/>
          <Cell id='4' value={this.state.board[4]} onClick={this.cellClicked}/>
          <Cell id='5' value={this.state.board[5]} onClick={this.cellClicked}/>
        </div>
        <div className='row'>
          <Cell id='6' value={this.state.board[6]} onClick={this.cellClicked}/>
          <Cell id='7' value={this.state.board[7]} onClick={this.cellClicked}/>
          <Cell id='8' value={this.state.board[8]} onClick={this.cellClicked}/>
        </div>
      </div>
    );
  }
}
