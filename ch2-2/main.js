$(document).ready(function() {
    'use script';
    console.log("main.jsを読み込み中...");

    paper.install(window);
    // mainCanvasをキャンバスに
    paper.setup(document.getElementById('mainCanvas'));

    let tool = new Tool();
    
    // Hello, World!の処理
    let c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    let text = new PointText(200, 200);

    // センタリング
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = "Hello, World!";

    // イベントハンドラ
    tool.onMouseDown = function(event){
        let c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
    };
});