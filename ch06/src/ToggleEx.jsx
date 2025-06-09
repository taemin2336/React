import useToggle from './useToggle'

function ToggleEx() {
   const [isToggled, toggle] = useToggle(false)

   return (
      <div>
         <button onClick={toggle}>{isToggled ? '끄기' : '켜기'}</button>
         {isToggled && (
            <p>
               현재 카운터 값은 <b></b>입니다.
            </p>
         )}
      </div>
   )
}

export default ToggleEx
