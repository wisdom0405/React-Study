/* eslint-disable */
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
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']); // [state데이터, state데이터 변경함수]

  function 제목바꾸기(){
      var newArray = [...글제목]; // spread operator를 통해서 state를 deep copy해야함
      newArray[0] = '여자코트 추천';
      글제목변경( ['여자 코트 추천', '강남 우동 맛집', '파이썬 독학'] );
  }

  // state 변경방법을 이용해서 state값을 변경하자
  // [state, state변경함수]
  // 따봉변경('대체할 데이터');
  let [따봉, 따봉변경] = useState(0);

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
            <h3> { 글제목[0] } <span onClick={()=>{ 따봉변경( 따봉 + 1) }}>👍</span> {따봉} </h3> 
            <p>2월 17일 발행</p>
            <button onClick={ 제목바꾸기 }>버튼</button>
            <hr/>
        </div>
        <div className='list'>
            <h3> { 글제목[1] } </h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>
        <div className='list'>
            <h3> {글제목[2]} </h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>
        <div className='list'>
            <h3> {posts} </h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>

        {/* 컴포넌트 사용시 원하는 곳에서 <함수명/> 하면 됨*/}
        <Modal></Modal>
      </div>
    </>
  )
}

// 컴포넌트명은 대문자로 시작해야 함.
function Modal(){
  return(
    // return 안에 html 코드 작성해주면된다.
    // 소괄호 안에는 div가 여러개 나란히 있을 수 없다.
    <div className='modal'>
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
    </div>
  )
}

export default App
