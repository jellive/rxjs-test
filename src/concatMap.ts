/**
 * concatMap
 * @description 스트림의 순서를 지킨 채로 각 소스 값을 Observable에 반영한다.
 *              Obervable은 출력 Obervable에 병합되며, 다음 소스를 병합하기 전에 각 소스가 완료 될 때까지 직렬화한다.
 */

import { fromEvent, interval } from 'rxjs'
import { concatMap, take } from 'rxjs/operators'
const btn = document.getElementById('btn')
const clicks = fromEvent(btn, 'click')
const result = clicks.pipe(concatMap((ev) => interval(1000).pipe(take(4))))
result.subscribe((x) => console.log(x))
