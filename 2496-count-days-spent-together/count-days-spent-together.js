/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const days=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function convert(date){
        let mounth=Number(date.slice(0,2));
        let day=Number(date.slice(3,5));

        let total=day;

        for(let i=0;i<mounth-1;i++){
            total+=days[i];
        }
        return total;
    }
    let a1=convert(arriveAlice);
    let a2=convert(leaveAlice);
    let b1=convert(arriveBob);
    let b2=convert(leaveBob);

    let start=Math.max(a1,b1);
    let end = Math.min(a2, b2);

    if(start>end) return 0;

    return end-start+1;

};