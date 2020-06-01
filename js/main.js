var numOfCells;
var gBoardSize;
var gNums;
var currCell = 1
var isOn = false;
var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")

function init() {
    gNums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    getBoardSize=4
    renderTable(4)
}

function getCells(elBtn) {
    numOfCells = elBtn.innerText
    getBoardSize(numOfCells)
    //console.log(numOfCells)
}

function getBoardSize(numOfCells) {
    gBoardSize = Math.sqrt(numOfCells)
    createArray(gBoardSize)
    console.log(getBoardSize)
}


function createArray(size) {
    var firstArray = [];
    for (var i = 1; i <=size; i++) {
        firstArray.push(i)
    }
   gNums = shuffle(firstArray)
    return firstArray;
}


function shuffle(arr) {
    var i;
    var j;
    var temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};


function renderTable(size) {
   var nums = createArray(size**2)
   console.log(nums)
   var shuffledNums = shuffle(nums);
   console.log(shuffledNums)
    var count = 0;
    var strHtml = '<table>';
    for (var i = 0; i < size; i++) {
        strHtml += '<tr>'
        for (var j = 0; j < size; j++) {
            strHtml += `<td onclick="cellClicked(this)"> ${shuffledNums[count]}</td>`
            count++
        }
    }
    strHtml += '</table>'
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHtml
    console.log(elBoard)
}
console.log(gNums);

function cellClicked(clickedNum) {
    if (isOn === false) {
        isOn = true;


    }
    var elCell = +clickedNum.innerText
    //console.log(elCell)
    if (elCell === currCell) {
        console.log('right!')
        start();
        currCell++
        clickedNum.style.backgroundColor = "red";
        if (currCell === 16) {
            stop();
        }
    } else {
        console.log('wrong')
    }
}


var Interval;

function start() {
    //    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);

}

function stop() {
    clearInterval(Interval);
}


function startTimer() {
    tens++;

    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;

    }

    if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

}


