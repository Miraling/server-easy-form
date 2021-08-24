function test(){

    var test1 = [{
        "name": "蓝百灵",
        "studentID": "001",
        "grade": "2018",
        "school": "新东方",
        "major": "2018"
        }];

    var form = {
        "name":"傻子",
        age:1000
    };

    var content = JSON.parse(JSON.stringify(test1));
    content.push(form);

console.log(content);


}

test();
