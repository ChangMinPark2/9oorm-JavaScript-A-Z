window.onload = function () {
    //문서가 load될 때 이 함수를 실행

    let text = document.getElementById('text');
    //아이디가 'text' 인 요소를 return

    text.innerText = 'HTML 문서 loaded';
}

//selector -> class, id가 아닌 태그 이름을 선택하는 것이다.
const aElement = document.querySelector('a');

aElement.addEventListener('click', () => {
    alert('a element clicked')
})


