const prompt = require("prompt-sync")({
    sigint: true
});

console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!')

//랜덤숫자 만들기
let random = [];
while (random.length < 2) {
    var ran1 = Math.floor(Math.random() * 10);
    var ran2 = Math.floor(Math.random() * 10);
    var ran3 = Math.floor(Math.random() * 10);

    if (ran1 != ran2 && ran2 != ran3 && ran3 != ran1) {
        // let random = ran1 + ran2 + ran3;
        random.push(ran2);
        random.push(ran1);
        random.push(ran3);
        // console.log(random)
    }
}

const randomnum = random[0].toString() + random[1].toString() + random[2].toString()
console.log(randomnum) //얘가 컴퓨터가 뽑운 숫자

var k = 1;
while (1 == 1) {
    var input = prompt(k + '번째 시도 : ');
    // console.log(input);
    k++;

    //볼, 스트라이크 판단
    var B = 0;
    var S = 0;
    for (let i = 0; i < randomnum.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (randomnum[i] === input[j] && i != j) { //값이 같고 위치 다를떄
                B++;
            } else if (randomnum[i] === input[j] && i == j) { //값,위치 일치
                S++;
            }
        }
    }

    //볼, 스트라이크 표현 부분
    if (B == 0 && S == 0) {
        console.log(B + 'B' + S + 'S')
    } else if (B == 0 && S != 0) {
        console.log(S + 'S')
    } else if (B != 0 && S == 0) {
        console.log(B + 'B')
    } else {
        console.log(B + 'B' + S + 'S')
    }

    //게임 종료
    if (input == randomnum) {
        console.log((k - 2) + '번만에 맞히셨습니다.\n게임을 종료합니다.');
        break;
    }
}