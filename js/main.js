let matrixA = [];
let matrixB = [];

function createMatrix(matrixName) {
  const rows = parseInt(document.getElementById(`rows${matrixName}`).value);
  const cols = parseInt(document.getElementById(`cols${matrixName}`).value);

  const matrixDiv = document.getElementById(`matrix${matrixName}`);
  matrixDiv.innerHTML = '';

  for (let i = 0; i < rows; i++) {
    matrixDiv.innerHTML += `<p>Fila ${i + 1}:</p>`;
    for (let j = 0; j < cols; j++) {
      matrixDiv.innerHTML += `<input type="number" id="${matrixName}_${i}_${j}" min="1" required>`;
    }
  }
}

function getMatrixValues(matrixName) {
  const rows = parseInt(document.getElementById(`rows${matrixName}`).value);
  const cols = parseInt(document.getElementById(`cols${matrixName}`).value);

  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = parseInt(document.getElementById(`${matrixName}_${i}_${j}`).value);
    }
  }
  return matrix;
}

function multiplyMatrices() {
  matrixA = getMatrixValues('A');
  matrixB = getMatrixValues('B');

  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const rowsB = matrixB.length;
  const colsB = matrixB[0].length;

  if (colsA !== rowsB) {
    alert('Las matrices no son multiplicables. El número de columnas de la matriz A debe ser igual al número de filas de la matriz B.');
    return;
  }

  const resultMatrix = multiply(matrixA, matrixB);
  displayResult(resultMatrix);
}

function multiply(matrixA, matrixB) {
  const result = [];
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;

  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    for (let j = 0; j < colsB; j++) {
      result[i][j] = 0;
      for (let k = 0; k < colsA; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return result;
}

function displayResult(resultMatrix) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  for (let i = 0; i < resultMatrix.length; i++) {
    for (let j = 0; j < resultMatrix[0].length; j++) {
      resultDiv.innerHTML += resultMatrix[i][j] + ' ';
    }
    resultDiv.innerHTML += '<br>';
  }
}
