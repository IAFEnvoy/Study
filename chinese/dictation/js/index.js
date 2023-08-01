let data = null, currentIndex = -1;
window.onload = async () => {
    data = await fetch('https://' + window.location.host + '/data/chinese.json').then(res => res.json())
}
const check = () => {
    let num = currentIndex;
    while (data[num][3] == null) num--;
    document.getElementById('answer').innerText = document.getElementById('ans').value == data[num][3] ? '√' : '×';
    document.getElementById('answer').innerText += '正确答案：' + data[num][3];
}
const next = () => {
    currentIndex = Math.floor(Math.random() * data.length);
    let num = currentIndex, res = data[currentIndex][4] + ' ' + data[currentIndex][5];
    while (data[num][1] == null) num--;
    document.getElementById('question').innerText = data[num][1] + ' ' + res;
}