import { useState } from 'react'

function UseMemoEx1() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')

   const onChange = (e) => setNumber(e.target.value)
   const onInsert = () => {
      const nextList = list.concat(parseInt(number))
      setList(nextList)
      setNumber('')
   }

   // 평균 구하는 함수
   const getAverage = (numbers) => {
      console.log('평균값 계산...')

      if (numbers.length === 0) return 0
      const sum = numbers.reduce((a, b) => a + b)
      return sum / numbers.length
   }
   return (
      <div>
         <input type="text" value={number} onChange={onChange} />
         <button onClick={onInsert}>등록</button>
         <ul>
            {list.map((value, index) => (
               <li key={index}>{value}</li>
            ))}
         </ul>
         <div>
            {/* getAverage() 함수 실행 */}
            <b>평균값: </b>
            <b>{getAverage(list)}</b>
         </div>
      </div>
   )
}

export default UseMemoEx1
