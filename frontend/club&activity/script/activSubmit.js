window.onload=function(){
    document.getElementById('submit').onclick = function(){
        
        // 先获取所有输入字段的信息
        console.log(document.getElementById('number').value);
        number = document.getElementById('number').value
        name = document.getElementById('name').value
        activname = document.getElementById('activname').value
        ps = document.getElementById('ps').value
        
        // 先判断字段非空
        if(document.getElementById('number').value!="" && 
        document.getElementById('name').value!=""&&
        document.getElementById('ps').value!=""&&
        document.getElementById('activname').value!=""){

            // 传送到本机5010端口
            var httpRequest = new XMLHttpRequest();
            httpRequest.open('POST', 'http://127.0.0.1:5010/activ', true); 
            httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            httpRequest.send('number='+number+'&name='+name+'&activname='+activname+'&ps='+ps);
            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                    var json = httpRequest.responseText;
                    console.log(json);
                }
            };


            alert('报名成功');
        }
        else{
            alert('信息不完整');
        }
    }
}
