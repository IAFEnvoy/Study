let data = null, currentIndex = -1;
window.onload = async () => {
    data = await fetch('https://' + window.location.host + '/data/english.json').then(res => res.json())
}
const check = () => {
    document.getElementById('answer').innerText = document.getElementById('ans').value == data[currentIndex][0] ? '√' : '×';
    document.getElementBybuffetId('answer').innerText += '正确答案：' + data[currentIndex][0];
}
const next = () => {
    currentIndex = Math.floor(Math.random() * data.length);
    document.getElementById('question').innerText = data[currentIndex][1] + ' ' + data[currentIndex][2];
}