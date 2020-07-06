/**
 * take
 * @description 값을 흘려보내는 회수를 결정.(fire)
 * @example 변경할 값의 최초 x회를 이용.???
 */

import { interval } from 'rxjs'
import { take } from 'rxjs/operators'

const intervalCount = interval(1000)
const takeFive = intervalCount.pipe(take(5)) // 다섯 번 쏨.
takeFive.subscribe((x) => console.log(x))
