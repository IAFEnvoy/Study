let data = null;
window.onload = async () => {
    data = await fetch('https://' + window.location.host + '/data/english.json').then(res => res.json())
}
const search = () => {
    document.getElementById('result').innerHTML = '';
    let keyword = document.getElementById('keyword').value;
    for (let i = 0; i < data.length; i++)
        if (data[i][0] != null && data[i][0] == keyword || data[i][2] != null && data[i][2].indexOf(keyword) != -1)
            document.getElementById('result').innerHTML += `<tr><td>${data[i][0]}</td><td>${data[i][1]}</td><td>${data[i][2]}</td></tr>`;
    if (document.getElementById('result').innerHTML == '')
        document.getElementById('result').innerHTML = '未找到搜索结果';
}