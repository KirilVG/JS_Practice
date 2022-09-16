import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Square (props) {
  return (
    <button
      className={"square" + (props.winning ? " winning" : "")}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        winning={this.props.highlited[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderRow(counter, index) {
    let elements = [];
    for (var i = 0; i < counter; i++) {
      elements.push(this.renderSquare(index));
      index++;
    }
    return elements;
  }

  renderRowsFunction(counter) {
    let rows = [];
    let index = 0;
    for (var i = 0; i < counter; i++) {
      rows.push(
        <div className="board-row" key={i}>
          {this.renderRow(counter, index)}
        </div>
      );
      index += counter;
    }
    return rows;
  }

  render() {
    let counter = 3;

    return <div>{this.renderRowsFunction(counter)}</div>;
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      stepNumber: 1,
      ascending: true,
      highlited: Array(9).fill(false),
    };
  }

  jumpTo(step) {
    let history = this.state.history.slice(0, step + 1);
    let highlited = Array(9).fill(false);
    let current = history[history.length-1]
    if(this.calculateWinner(current.squares))
    {
        let res=this.getWinningElements(current.squares)
        highlited[res[1]]=true;
        highlited[res[2]]=true;
        highlited[res[3]]=true;
    }
    this.setState({
      history: history,
      stepNumber: step,
      xIsNext: step % 2 === 0,
      ascending: this.state.ascending,
      highlited: highlited,
    });
  }

  SortHistory() {
    let history = this.state.history.slice();
    let stepNumber = this.state.stepNumber;
    let xIsNext = this.state.xIsNext;
    let ascending = !this.state.ascending;
    let highlited=this.state.highlited;

    this.setState({
      history: history,
      stepNumber: stepNumber,
      xIsNext: xIsNext,
      ascending: ascending,
      highlited: highlited,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice();
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const ascending = this.state.ascending;
    let highlited=Array(9).fill(false);
    if (this.itIsDraw(squares) || this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    if(this.calculateWinner(squares))
    {
        let res=this.getWinningElements(squares)
        highlited[res[1]]=true;
        highlited[res[2]]=true;
        highlited[res[3]]=true;
    }

    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
      ascending: ascending,
      highlited: highlited
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = this.calculateWinner(current.squares);
    const draw=this.itIsDraw(current.squares);
    const ascending = this.state.ascending;
    const highlited=this.state.highlited;
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : `Go to game start`;
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)} className="stateSelctBtn historybtn">
            {desc}
          </button>
        </li>
      );
    });

    if (!ascending) moves.reverse();
    let status;
    if(draw) {
        status = `Draw`;
    } else if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            highlited={highlited}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>
            <button className="historybtn" onClick={() => this.SortHistory()}>
              {ascending ? "Descending" : "Ascending"}
            </button>
          </div>
          <div>{moves}</div>
        </div>
      </div>
    );
  }

  calculateWinner(squares) {
    let res = this.getWinningElements(squares);
    if (res === null) return null;
    return res[0];
  }

  getWinningElements(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return [squares[a], a, b, c];
      }
    }
    return null;
  }
  itIsDraw(squares) {
    if(!this.calculateWinner(squares))
    {
        for(let i=0;i<9;i++) {
            if(!squares[i]) return false;
        }

        return true;
    }
    return false;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
