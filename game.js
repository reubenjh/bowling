// Score 119:
//
var frames = [
    [1, 2], 
    [6, 4], 
    [5, 4], 
    [10, 0], 
    [7, 2], 
    [10, 0], 
    [10, 0], 
    [5, 2], 
    [7, 0], 
    [4, 4]
]



countScore(frames);

function countScore(frames) {
    let total = 0;
    let frameTotal = 0;
    let ball1 = 0;
    let ball2 = 0; 
    let ball3 = 0;
    let ball4 = 0;
    let ball5 = 0;

    for (i=0; i<frames.length; i++) {
        ball1 = frames[i][0];
        ball2 = frames[i][1];

        // trying to account for errors with i returning undefined
        if (!frames[0+1] === undefined) {
            ball3 = frames[0+1][0];
            ball4 = frames[0+1][1];
        }
        if (!frames[i+2] === undefined) {
            ball5 = frames[i+2][0];
        }
        


        
        frameTotal = ball1 + ball2; 

        if (frameTotal == 10) {
            frameTotal += ball3;
        }

        if (ball1 == 10) {
            frameTotal += ball4;
        }

        if (ball1 == 10 && ball3 == 10) {
            frameTotal += ball5
        }

        total += frameTotal;
    }

    console.log("hello")
    return total;

    // spare = ball 1 + ball 2 + ball 3
    // strike = ball 1 + ball 2 + ball 3 + ball 4
    // doublestrike = ball 1 + ball 2 + ball 3 + ball 4 + ball 5

    // can't deal with doublestrike situation due to it returning undefined from i+2 on the second to last frame,
}












//
// Score 141:
//
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
