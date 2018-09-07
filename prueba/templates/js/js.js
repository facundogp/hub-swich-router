import React from 'react';
import ReactDOM from 'react-dom';


const romeo_santos = 'my people I am lucas but without s';
const element = <h1>Hello, {romeo_santos}</h1>;
// ========================================
ReactDOM.render(
  element,
  document.getElementById('root')
);




var vector = [];
max = 0;
function tomarDatos (){
	var num = document.getElementById('txtPrueba').value;
	vector.push(num);
	document.getElementById("LblPrueba"). innerHTML = vector;
}

function limpiaCampo() {
	var elementosRemovidos = vector.splice(0, vector.length);

    document.getElementById("LblPrueba"). innerHTML = vector;
}



class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
