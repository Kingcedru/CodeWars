// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

export class Kata {
    static highAndLow(numbers: string): string {
      let newArr  = []
      let newArr2 = numbers.split(" ")
      for(let i = 0; i < newArr2.length; i++){
          newArr.push(Number(newArr2[i]))
        }
      const min = Math.min(...newArr)
      const max = Math.max(...newArr)
      return `${max} ${min}`
    }
  }