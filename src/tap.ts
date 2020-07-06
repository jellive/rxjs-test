/**
 * tap
 * @description 스트림에 영향을 주지 않고, 임의의 처리를 실시한다.
 * @example 로그 표시
 */

import { fromEvent } from 'rxjs'
import { tap, map } from 'rxjs/operators'

const btn = document.getElementById('btn')
const clicks = fromEvent(btn, 'click')
const positions = clicks.pipe(
  tap((ev) => console.log(ev)),
  map((ev: any) => ev.clientX)
)

positions.subscribe((x) => console.log(x))
