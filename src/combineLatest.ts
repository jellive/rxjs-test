/**
 * combineLatest
 * @description 처음의 모든 스트림에서 값을 받고, 그 이후는 스트림에 값이 들어올 때마다 비동기로 구독한다.
 * @example 채팅?
 */

import { interval } from 'rxjs'
import { combineLatest, map } from 'rxjs/operators'

const goldenMomo = interval(5000)
const momo = interval(1000)
const ex = goldenMomo.pipe(
  combineLatest(momo),
  map(([gold, momo]) => {
    return `gold: ${gold}, momo: ${momo}`
  })
)

ex.subscribe((x) => console.log(x))
