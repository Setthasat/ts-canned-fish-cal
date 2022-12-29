# 1. ปลากระป๋องยี่ห้อหนึ่งใช้ปลาซูาร์ดีนสามตัวและมะเขือเทศสองผลเพื่อผลิตปลากระป๋องหนึ่งกระป๋อง หากโรงงาน
# ผลิตมีปลาซูาร์ดีนอยู่ 300 ตัวและมะเขือเทศอยู่ 200 ผล โรงงานจะผลิตปลากระป๋องได้ทั้งหมดกี่กระป๋อง

import math


def main():
    fish = 333
    tomato = 222
    fishofcan = 3
    tomatoofcan = 2
    print(cal(fish, tomato, fishofcan, tomatoofcan))


def cal(fish, tomato, fishofcan, tomatoofcan):
    newfish = fish / fishofcan
    newtomato = tomato / tomatoofcan
    can = less(newfish, newtomato)
    caldigit(can)
    return can


def less(newfish, newtomato):
    if newfish < newtomato:
        return newfish
    return newtomato


def caldigit(can):
    if can % 1 >= 0.5:
        return math.ceil(can)

    return math.floor(can)



if __name__ == '__main__':
    main()
