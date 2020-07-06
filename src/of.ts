/**
 * of
 * @description 인자들을 Observable하게 변환한다.
 * @example 테스트, 확인용, 스트림분류, 결합시의 앞뒤맞춤
 */

import { of } from 'rxjs'

of(10, 20, 30).subscribe(
  (next) => console.log('next:', next),
  (err) => console.log('error:', err),
  () => console.log('the end')
)

// 행렬도 하나로 취급한다.
of([1, 2, 3]).subscribe(
  (next) => console.log('next:', next),
  (err) => console.log('error:', err),
  () => console.log('the end')
)
