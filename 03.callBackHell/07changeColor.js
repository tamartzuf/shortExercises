let counter = 0;
const colors = ["red", "pink", "blue", "orange", "grey"];
function changeColor(time, color, callBack, reject){
    //Can be called Max 3 times
    if (counter >= 7){
        return reject();
    } 
    counter++;
    const ran = random(10);
    console.log(ran)
    //The number is greater than 5, change background color for atleasta second
    if(ran>5){
        console.log("Change color");
        changeBackgroundColor(color);
         //Call the callback in a delay
        setTimeout(() => {
            if (callBack) {
                //Call callback with same params but new random color
                callBack(time, randomColor(), changeColor, reject);
              }
            }, time);
          } else {
            //Reject color change randomly
            if (reject) reject(counter);
          }
}

function changeBackgroundColor(color){
    console.log("Changing to " + color);
    document.body.style.backgroundColor = color;
}

function printReject(callBackNum) {
    console.log(`Your request was rejected (callback ${callBackNum})`);
  } 

const random = (max) => {
    return Math.round(Math.random() * max);
  };
const randomColor = () => {
    return colors[random(colors.length - 1)];
  };

changeColor(1000, randomColor(), changeColor, printReject);
