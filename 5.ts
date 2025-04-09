function findDivisors(num: number): number[] {
  const divisors: number[] = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}


console.log(findDivisors(12)); 
