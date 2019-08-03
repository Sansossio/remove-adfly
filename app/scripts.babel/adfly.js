// Source: https://www.codewars.com/kata/adfly-encoder-and-decoder
const decodeAdfly = (ysmm) => {
  let response = ysmm;
  let I = '';
  let X = '';
  for (let i = 0; i < response.length; i++) {
    if (i % 2 == 0) {
      I += response.charAt(i);
    } else {
      X = response.charAt(i) + X;
    }
  }
  response = I + X;
  const U = response.split('');
  for (let i = 0; i < U.length; i++) {
    if (!isNaN(U[i])) {
      for (var j = i + 1; j < U.length; j++) {
        if (!isNaN(U[j])) {
          var S = U[i] ^ U[j];
          if (S < 10) {
            U[i] = S;
          }
          i = j;
          j = U.length;
        }
      }
    }
  }
  response = U.join('');
  response = window.atob(response);
  response = response.substring(response.length - (response.length - 16));
  response = response.substring(0, response.length - 16);
  return response;
}

// This variable (ysmm) contains the encrypted final url
Object.defineProperty(window, 'ysmm', {
  set: (val) => {
    const key = decodeAdfly(val);
    if (typeof key === 'string' && key.startsWith('http')) {
      window.onbeforeunload = null;
      window.location = key;
    }
  }
});