let data = null;
window.onload = async () => {
    data = await fetch('https://' + window.location.host + '/data/test.json').then(res => res.json())
}
const search = () => {
    document.getElementById('result').innerHTML = '';
    let keyword = document.getElementById('keyword').value;
    for (let i = 0; i < data.length; i++)
        if (data[i][1] != null && data[i][1] == keyword) {
            document.getElementById('result').innerHTML += `<tr><td>${data[i].join('</td><td>')}</td></tr>`;
            i++;
            while (data[i][1] == null) {
                document.getElementById('result').innerHTML += `<tr><td>${data[i].join('</td><td>')}</td></tr>`;
                i++;
            }
        }
    if (document.getElementById('result').innerHTML == '')
        document.getElementById('result').innerHTML = '未找到搜索结果'
}