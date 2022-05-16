
//Wix Code

$w.onReady(function () {});

let startNum = 0;

let endNum = 1000;

const duration = 300;

 

$w.onReady(function () {

    setInterval(() => {

        countUp();

    }, duration);

});

 

function countUp() {

    if (startNum <= endNum) {

        $w('#StartNumber').text = startNum.toString();

        startNum++;

    }

}