## Ref

- 다른 DOM요소에 접근해서 그것들고 작업을 할수 있게 해주는 것이다.

- state는 폼이 제출할 경우에만 필요한데도 키를 입력할때마다 state를 업데이트한다는 건 약간 과하다. 이럴 경우에만 쓰이는 것은 아니지만, ref를 쓰면 좋다.

1. import에 useRef 생성

2. useRef();

   - useRef는 어떤값을 반환하고 어떤값을 취할까?
     - 반환하는 초기값을 잡아야 한다.
     - 무엇을 반화하는지.

3. ref를 요소에 연결하여 해당요소와 작업하게 한다

   - const nameInputRef = useRef();
   - const ageInputRef = useRef();

4. ref를 사용자 이름을 입력하게 해주는 인풋과 연결.(ref를 HTML요소와 연결)

5. ref 프롭은 키 프롭과 마찬가지로 내장 프롭이다.

   - < input ref={nameInputRef} />

- 리액트가 이코드에 처음 도달해서 렌더링 할때 nameInputRef에 저장된 값을 이 인풋 기반으로 렌더링된 네이티브 DOM 요소에 설정한다.
- nameInputRef 안에 들어 있는 것은 나중에 실제 DOM 요소가 될 것이다.

---

여기서 생성되는 ref의 값은 언제나 객체이다.

항상 current prop을 가지고 있다.

current 프롭은 그 ref가 연결된 실제값을 갖는다.

기본값은 정의되지 않음이지만 코드가 실행되자마자 이 ref 프롭때문에 nameInputRef는 인풋에 연결. current 프롭에 값으로 저장된 인풋이다.

- props.onAddUser(enteredName, enteredUserAge);

이렇게 제출을 하고나면 더이상 인풋들을 폼을 제출하고 재설정하면 안되기때문에 지워야 한다.
왜나하면 재설정을 두면 state 사용하여 재설정하기 때문이다. 이제는 더이상 값을 가져오기 위해 state를 사용하지 않는다. handler 함수도 있지만 더이상 이부분도 필요치 않다.

- state 삭제
- state 업데이트 되는 함수 삭제
- 핸들러 삭제
- 값속성도 onChange삭제
- 값을 읽어오는 일은 ref가 한다.
- 재설정 로직 사라짐! state 기반 설정 방법
  1. 리액트 없이 DOM에서 하는 경우(드물게 쓴다.)
     - nameInputRef.current.value를 빈문자열로 설정.
     - ageInputRef.current.value도 빈문자열로 설정.
     - 하지만 이것은 사용자가 입력한 내용을 바꾼것 뿐이다.
  2. state 기반 재설정 로직

---

uncontrol components

- ref를 사용한 input
- 내부 state이기 때문에 이것들 안으로 반영되는 값은 리액트에 제어되지 않는다.
- 해당 인풋에 새 값을 설정하면 이 해결법을 쓰면 리액트는 사용되지 않는다. ref를 사용하긴 하지만 그건 네이티브 DOM 요소에 접근하기 위한 것이다. 그런 다음 일반 DOM API를 사용해서 input DOM 와 DOM 값을 설정한다.
