// 1. ปลากระป๋องยี่ห้อหนึ่งใช้ปลาซูาร์ดีนสามตัวและมะเขือเทศสองผลเพื่อผลิตปลากระป๋องหนึ่งกระป๋อง หากโรงงาน
// ผลิตมีปลาซูาร์ดีนอยู่ 300 ตัวและมะเขือเทศอยู่ 200 ผล โรงงานจะผลิตปลากระป๋องได้ทั้งหมดกี่กระป๋อง


function main() : void {
    var fish : number = 300
    var tomato : number = 200
    var fishofcan : number = 3
    var tomatoofcan : number = 2
    var can = cal(fish, tomato, fishofcan, tomatoofcan)
    console.log(can)
}

function cal(fish : number, tomato : number, fishofcan : number, tomatoofcan : number) : number {
    var newfish = fish / fishofcan
    var newtomato = tomato / tomatoofcan
    var can = less(newfish, newtomato)
    caldigit(can)
    return can
}

function less(newfish : number, newtomato : number) : number{
    if(newfish < newtomato){
        return newfish
    }
    return newtomato
}

// ปัดเศษส่วน
function caldigit(can : number) : number{
    if(can % 1 >= 0.5){
        return parseInt(can.toFixed())
    }
    return Math.floor(can)
}

main()
