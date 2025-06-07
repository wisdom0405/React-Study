import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let posts = '강남 고기 맛집';
  let postStyle = { color : 'blue', fontSize: '30px'} // 스타일도 { } 형태로 데이터바인딩 가능

  // let [a,b] = [10, 100] // a에는 10 b에는 100담는다.
  // state에 데이터 저장하는 이유 : state는 변경되면 새로고침 없이 HTML이 자동으로 재렌더링 된다.
  // 자주 바뀌는, 중요한 데이터는 변수말고 state에 저장해서 쓰자자
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집']); // [state데이터, state데이터 변경함수]

  

  return (
    <>
      <div className='App'>
        <nav className='black-nav'>
          {/* jsx에서 style 속성 집어넣을때는 style={object 자료형으로 만든 스타일}, 
              속성명camelCase로 써야됨 */}
          <div style={{color : 'white', fontSize:'30px'}}>개발 Blog</div>
          {/* <div style={ postStyle }>개발 Blog</div> */}
        </nav>
        {/* src, id, href등의 속성에도 중괄호 {변수명, 함수 등} 넣을 수 있음 */}
        {/* <img src= {reactLogo} />  */}
        <div className='list'>
          {/* state : 변수 대신 쓰는 데이터 저장공간, useState()를 이용해 만들어야 함 */}
            <h3> { 글제목[0] } </h3> 
            <p>2월 17일 발행</p>
            <hr/>
        </div>
        <div className='list'>
            <h3> { 글제목[1] } </h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>
        <div className='list'>
            <h3> {posts} </h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>
        <div className='list'>
            <h3> {posts} </h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>

      </div>
    </>
  )
}

export default App
