isPalindrome = (num) => {
  if (num < 0) return false;
  if (num % 10 === 0 && num !==0) return false;

  let reversed = 0;
  while (num > reversed) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);
    reversed = reversed * 10 + lastDigit;
  }
  // console.log("..." + num);
  // console.log("..." + reversed);

  return ( num === reversed || num === Math.floor(reversed / 10));
}

// console.log(isPalindrome(121));
// console.log(isPalindrome(23));
// console.log(isPalindrome(0));
// console.log(isPalindrome(-4));
console.log(isPalindrome(12345654321));
console.log(isPalindrome(1234554321));
