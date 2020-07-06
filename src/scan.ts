/**
 * scan
 * @description seed값을 넣고 이전의 값을 변경한 값으로 계속 내보낸다. reduce()라고 보면 됨.
 * @example 무한 스크롤의 아이템 리스트 관리
 */

import { fromEvent } from 'rxjs'
import { scan, mapTo } from 'rxjs/operators'

const btn = document.getElementById('btn')
const clicks = fromEvent(btn, 'click')
const ones = clicks.pipe(mapTo(1))
const seed = 1000
const count = ones.pipe(scan((acc, one) => acc + one, seed))
count.subscribe((x) => console.log(x))
