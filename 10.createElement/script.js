//element 생성
const li = document.createElement('li')

//class 추가하기
li.className = 'list-group-item';

// id 추가하기

li.id = 'new-item';

//속성을 셋한다.
li.setAttribute('name', 'New list item');

//link element 생성하기
const link = document.createElement('a');

link.className = 'alarm-item';



document.querySelector('ul.list-group').appendChild(li);