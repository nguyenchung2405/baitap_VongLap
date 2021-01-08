document.getElementById('taoTheDiv').addEventListener('click', createDivTag);

function createDivTag() {
    for (var i = 0; i < 5; i++) {
        var taoTheDiv = document.createElement('div');
        taoTheDiv.style.backgroundColor = 'blue';
        taoTheDiv.style.height = '100px';
        var tagBody = document.getElementsByTagName('body');
        tagBody[0].appendChild(taoTheDiv);
        var taoTheDiv = document.createElement('div');
        taoTheDiv.style.backgroundColor = 'red';
        taoTheDiv.style.height = '100px';
        var tagBody = document.getElementsByTagName('body');
        tagBody[0].appendChild(taoTheDiv);
    }
}
