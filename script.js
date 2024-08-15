const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const isValidSudoku = (board) => {
  // Initialize arrays to store the presence of numbers
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  // Iterate through each cell in the board
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];

      // Skip empty cells
      if (num === ".") continue;

      // Check rows
      if (rows[i].has(num)) {
        return false;
      }
      rows[i].add(num);

      // Check columns
      if (cols[j].has(num)) {
        return false;
      }
      cols[j].add(num);

      // Check 3x3 sub-boxes
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (boxes[boxIndex].has(num)) {
        return false;
      }
      boxes[boxIndex].add(num);
      console.log({rows,cols,boxes})
    }
  }

  // If no duplicates are found, the board is valid
  return true;
};

console.log(isValidSudoku(board));
