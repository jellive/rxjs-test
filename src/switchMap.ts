/**
 * switchMap
 * @description Observable을 해결하고 결합 (만약 실행되다가 이후의 값이 올 경우, 실행 중의 처리를 중단)
 * @example auto complete 기능 (글을 입력할 때는 안되다가 끝나면 실행)
 */

import { of } from 'rxjs'
import { switchMap } from 'rxjs/operators'

const switched = of(1, 2, 3).pipe(
  switchMap((x: number) => of(x, x ** 2, x ** 3))
)
switched.subscribe((x) => console.log(x))
