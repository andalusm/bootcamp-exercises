// const myObject = {
//     data: [11, 13, 14, 66, 67, 69, 234, 456, 2, 1],
//     pointer: 0,
//     next: function () {
//         if (this.pointer < this.data.length && this.data[this.pointer]%2===0 )
//         {
//             this.pointer++;
//             return { value: this.data[this.pointer-1], done: false };
//         }
            
//         else if (this.pointer > this.data.length)
//             return { value: undefined, done: true }
//         else{
//             this.pointer++;
//          } 
//     },

// }
// const myObject2 = {
//     [Symbol.iterator]: function () {
//       return myObject;
//     },
//   };

const myObject ={
    [Symbol.iterator]() {
      let i = 0;
      let data = [11, 13, 14, 66, 67, 69, 234, 456, 2, 1];
      return {
        next() {
          i++;
          if (i < data.length && data[i]%2 === 0) 
            return { done: true, value: i };
          else if(i < data.length)
                

          return { done: false, value: i };
        },
        return() {
          return { done: true };
        },
      };
    },
  };

for (let x of myObject) {
    console.log(x)
}
