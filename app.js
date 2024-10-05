// JS Call Stack
// function hello() {
//     console.log("inside hello fnx");
//     console.log("hello");
// }

// function demo() {
//     console.log("calling hello fnx");
//     hello();
// }
// console.log("calling demo fnx");
// demo();
// console.log("done bye!");

// visualizing the call stack
// function one() {
//     return 1;
// }

// function two() {
//     return one()+ one();
// }

// function three() {
//     let ans= two()+one();
//     console.log(ans);
// }
// three();

// JS is Single threaded
// let a=25;
// console.log(a);
// let b=10;
// console.log(b);
// console.log(a+b);

// callback hell
// setTimeout( function(){
//     console.log("apna college");
// },2000);

// console.log("hello...");

// h1=document.querySelector("h1");

// function changeColor(color,delay){
//     setTimeout(()=>{
//         h1.style.color=color; 
//     },delay);

// }
// changeColor("red",1000);

// changeColor("orange",2000);

// changeColor("blue",3000);

//  setTimeout(function(){
//     h1.style.color="red";
//  },1000);

//  setTimeout(()=>{
//     h1.style.color="orange";
//  },2000);

//  setTimeout(()=>{
//     h1.style.color="blue";
//  },3000);

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color; 
//         if(nextColorChange) nextColorChange();
//     },delay);

// }
// changeColor("red",1000, ()=>{
//     changeColor("orange",1000,()=> {
//         changeColor("green",1000,()=> {
//             changeColor("blue",1000);
//         });
//     });
// });

// promises
// function savetoDb(data) {
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4) {
//         console.log("your data was saved");
//     } else {
//         console.log("weak connecion,data not saved");
//     }
// }
// savetoDb("Mahseeba Tanzeem");

// function savetoDb(data,success,failure) {
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4) {
//         success();
//     } else {
//         failure();
//     }
// }
// savetoDb(
//     "Mahseeba Tanzeem",
//     ()=>{
//         console.log("success: your data was saved");
//         savetoDb(
//             "Congratulations!!",
//             ()=>{
//                 console.log("success2: your data was saved");
//                 savetoDb(
//                     "You got the job",
//                     ()=>{
//                         console.log("success3: your data was saved");
//                     },
//                     ()=>{
//                         console.log("failure3:weak connection, data not saved");
//                     }
//                 );
//             },
//             ()=>{
//                 console.log("failure2:weak connection, data not saved");
//             }
//         );
//     },
//     ()=>{
//         console.log("failure:weak connection, data not saved");
//     }
// );

//promises
// function saveToDb(data){
//     return new Promise ((resolve,reject)=>{
//         let internetSpeed=(Math.floor(Math.random()*10))+1;
//         if(internetSpeed>4){
//             resolve("success:data was saved");
//         }else {
//             reject("failure:weak connection");
//         }
//     });
// } 

// then and catch
// let request=saveToDb("apna college");
// request.then(()=> {
//     console.log("promise resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise rejected");
//     console.log(request);
// });

// promise chaining
// saveToDb("apna college")
// .then(()=>{
//     console.log("promise 1 resolved");
//     saveToDb("hello world")
//     .then(()=> {
//         console.log(" promise 2 resolved");
//     })
// })
// .catch(()=> {
//     console.log("some promise rejected");
// })

// saveToDb("apna college")
// .then(()=>{
//     console.log("promise 1 resolved");
//      return saveToDb("hello world");
//     })
// .then(()=> {
//     console.log(" promise 2 resolved");
    
// })
// .catch(()=> {
//     console.log("some promise rejected");
// })

// saveToDb("apna college")
// .then(()=>{
//     console.log("promise 1 resolved");
//      return saveToDb("hello world");
//     })
// .then(()=> {
//     console.log(" promise 2 resolved");
//     return saveToDb("Tanzeem");
// })
// .then(()=> {
//     console.log("promise 3 resolved");
// })
// .catch(()=> {
//     console.log("some promise rejected");
// })

//rsults and errors in promises
// saveToDb("apna college")
// .then((result)=>{
//     console.log("promise 1 resolved");
//     console.log("result:",result);
//      return saveToDb("hello world");
//     })
// .then((result)=> {
//     console.log(" promise 2 resolved");
//     console.log("result:",result);
//     return saveToDb("Tanzeem");
// })
// .then((result)=> {
//     console.log("promise 3 resolved");
//     console.log("result:",result);
// })
// .catch((error)=> {
//     console.log("some promise rejected");
//     console.log("error:",error);
// })

// refactoring old code(callback hell to promises)
h1=document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            h1.style.color=color; 
            resolve("color changed!");
        },delay);
    });
}
changeColor ("red",1000)
.then(()=> {
    console.log("red color was completed");
    return changeColor("orange",1000);
})
.then(()=> {
    console.log("orange color was completed");
    return changeColor("green",1000);
})
.then(()=> {
    console.log("green color was completed");
    return changeColor("blue",1000);
})
.then(()=> {
    console.log("blue color was completed");
});
// changeColor("red",1000, ()=>{
//     changeColor("orange",1000,()=> {
//         changeColor("green",1000,()=> {
//             changeColor("blue",1000);
//         });
//     });
// });