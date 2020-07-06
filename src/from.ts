/**
 * from
 * @description Promise나 iterator를 가진 값 (string, array 등)을 Observable하게 변환
 * @example API의 repsonse 결과를 가공해서 필요한 값을 꺼냄
 * @주의사항1 pipe는 observable한 stream을 붙일 것
 * @주의사항2 operators 함수들은 pipe안에 돌릴 것.
 */

import fetch from 'node-fetch'
import { from } from 'rxjs'
import { map } from 'rxjs/operators'

function getUserId() {
  return from<Promise<{ userId: number }>>(
    fetch('https://jsonplaceholder.typicode.com/posts/1').then((r) => r.json())
  )
    .pipe(
      map((v: any) => {
        return v.userId
      })
    )
    .subscribe(console.log)
}

getUserId()
