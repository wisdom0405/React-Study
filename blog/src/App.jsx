import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let posts = '강남 고기 맛집';
  let postStyle = { color : 'blue', fontSize: '30px'} // 스타일도 

  return (
    <>
     <nav className='black-nav'>
        {/* jsx에서 style 속성 집어넣을때는 style={object 자료형으로 만든 스타일}, 
            속성명camelCase로 써야됨 */}
        <div style={{color : 'blue', fontSize:'30px'}}>개발 Blog</div>
        <div style={ postStyle }>개발 Blog</div>
     </nav>
     {/* src, id, href등의 속성에도 중괄호 {변수명, 함수 등} 넣을 수 있음 */}
     <img src= {reactLogo} /> 
     <h4> { posts } </h4>
    </>
  )
}

export default App
