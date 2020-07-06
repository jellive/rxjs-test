/**
 * fromEvent
 * @description 이벤트를 Observable로 변환
 * @example 클릭이벤트 포착
 */

import { fromEvent } from 'rxjs'

const input = document.getElementById('btn')
const click$ = fromEvent(input, 'click')
click$.subscribe(console.log)
