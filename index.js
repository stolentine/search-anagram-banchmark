function isAnagramSum(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let sum = 0;
  for(let i = 0; i < first.length; i++) {
    sum += first.charCodeAt(i) - second.charCodeAt(i);
  }

  return sum === 0
}


function isAnagramSort(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  first = first.split('').sort()
  second = second.split('').sort()

  for(let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;
}


function isAnagramSumAndSort(first, second) {
  if (first.length !== second.length) {
    return false;
  }


  let sum = 0;
  for(let i = 0; i < first.length; i++) {
    sum += first.charCodeAt(i) - second.charCodeAt(i);
  }

  if (sum !== 0) {
    return false
  }

  first = first.split('').sort()
  second = second.split('').sort()

  for(let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;
}

function isAnagramMap(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let map = {};
  for(let i = 0; i < first.length; i++) {
    if (map[first[i]] === undefined) {
      map[first[i]] = 0
    }

    map[first[i]]++


    if (map[second[i]] === undefined) {
      map[second[i]] = 0
    }

    map[second[i]]--
  }

  for (const char in map) {
    if (map[char] !== 0) {
      return false;
    }
  }

  return true
}


console.log('test sum')
console.log(isAnagramSum('bAbabaz', 'zaabbAb') === true ? 'pass':'fail')
console.log(isAnagramSum('kaban', 'banka') === true ? 'pass':'fail')
console.log(isAnagramSum('foo', 'baz') === false ? 'pass':'fail')
console.log(isAnagramSum('a', 'abc') === false ? 'pass':'fail')
console.log(isAnagramSum('банка', 'кабан') === true ? 'pass':'fail')
console.log(isAnagramSum('22n', 'FFF') === false ? 'pass':'fail') // fail


console.log('test sort')
console.log(isAnagramSort('bAbabaz', 'zaabbAb') === true ? 'pass':'fail')
console.log(isAnagramSort('kaban', 'banka') === true ? 'pass':'fail')
console.log(isAnagramSort('foo', 'baz') === false ? 'pass':'fail')
console.log(isAnagramSort('a', 'abc') === false ? 'pass':'fail')
console.log(isAnagramSort('банка', 'кабан') === true ? 'pass':'fail')
console.log(isAnagramSort('22n', 'FFF') === false ? 'pass':'fail')

console.log('test sum And Sort')
console.log(isAnagramSumAndSort('bAbabaz', 'zaabbAb') === true ? 'pass':'fail')
console.log(isAnagramSumAndSort('kaban', 'banka') === true ? 'pass':'fail')
console.log(isAnagramSumAndSort('foo', 'baz') === false ? 'pass':'fail')
console.log(isAnagramSumAndSort('a', 'abc') === false ? 'pass':'fail')
console.log(isAnagramSumAndSort('банка', 'кабан') === true ? 'pass':'fail')
console.log(isAnagramSumAndSort('22n', 'FFF') === false ? 'pass':'fail')

console.log('test map')
console.log(isAnagramMap('bAbabaz', 'zaabbAb') === true ? 'pass':'fail')
console.log(isAnagramMap('kaban', 'banka') === true ? 'pass':'fail')
console.log(isAnagramMap('foo', 'baz') === false ? 'pass':'fail')
console.log(isAnagramMap('a', 'abc') === false ? 'pass':'fail')
console.log(isAnagramMap('банка', 'кабан') === true ? 'pass':'fail')
console.log(isAnagramMap('22n', 'FFF') === false ? 'pass':'fail')


function randomstr(length) {
  let result = '';
  let counter = 0;
  while (counter < length) {
    result += String.fromCharCode(Math.floor(Math.random() * 65535));
    counter += 1;
  }
  return result;
}
function randomAnagram(string) {
  return string.split('').sort(() => Math.random() - 0.5).join('');
}

const cases = []
for (let i = 0; i < 500_000; i++) {
  cases.push([
    randomstr(10),
    randomstr(10),
  ])
}
for (let i = 0; i < 500_000; i++) {
  const str = randomstr(10)
  cases.push([
    str,
    randomAnagram(str),
  ])
}

function benchmark(algorithm) {
  const start = Date.now();

  let count = 0
  cases.forEach((pair) => {
    count += algorithm(...pair) ? 1 : 0
  })

  return {
    time: Date.now() - start,
    count
  }
}


const sum = benchmark(isAnagramSum)
console.log(`sum: ${sum.time}ms. anagram count: ${sum.count}`)
const sort = benchmark(isAnagramSort)
console.log(`sort: ${sort.time}ms. anagram count: ${sort.count}`)
const sumAndSort = benchmark(isAnagramSumAndSort)
console.log(`sum and sort: ${sumAndSort.time}ms. anagram count: ${sumAndSort.count}`)
const map = benchmark(isAnagramMap)
console.log(`map: ${map.time}ms. anagram count: ${map.count}`)



