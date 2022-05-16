// For loop prints numbers from 100-200 unless multiple of 3 or 4 or both
for (let i = 100; i < 201; i++) {
  if ((i % 3 === 0) && (i % 4 === 0)) {
    console.log('LoopyLighthouse');
  } else if (i % 3 === 0) {
    console.log('Loopy');
  } else if (i % 4 === 0) {
    console.log('Lighthouse');
  } else {
    console.log(i);
  }
}