/**
 * mergeMap
 * @description 각 소스 값을 Observable에 투영하여 출력 Observable에 병합함.
 */

import { of, interval } from 'rxjs'
import { mergeMap, map } from 'rxjs/operators'

const letters = of('상급복숭아', '중급복숭아', '하급복숭아')
const result = letters.pipe(
  mergeMap((x) => interval(1000).pipe(map((i) => x + `통조림${i} 세트`)))
)
result.subscribe((x) => console.log(x))
