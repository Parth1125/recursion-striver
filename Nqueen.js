function solveNQueens(n) {
    const solutions = [];
    const board = new Array(n).fill().map(() => new Array(n).fill('.'));
  
    function isSafe(row, col) {
      // Check if there is a queen in the same column
      for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') {
          return false;
        }
      }
  
      // Check if there is a queen in the upper left diagonal
      for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') {
          return false;
        }
      }
  
      // Check if there is a queen in the upper right diagonal
      for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') {
          return false;
        }
      }
  
      return true;
    }
  
    function placeQueens(row) {
      if (row === n) {
        const solution = board.map(row => row.join(''));
        solutions.push(solution);
        return;
      }
  
      for (let col = 0; col < n; col++) {
        if (isSafe(row, col)) {
          board[row][col] = 'Q';
          placeQueens(row + 1);
          board[row][col] = '.';
        }
      }
    }
  
    placeQueens(0);
    return solutions;
  }