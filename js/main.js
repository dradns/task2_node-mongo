let newTask = document.getElementById('b1');
newTask.addEventListener('click',function () {
    document.getElementById('form1').style.display = 'block';
});

let form2 = document.querySelector('#form2');

form2.addEventListener('submit',function () {
    let obj = {};
    alert(this.taskName.value);
    alert(this.taskType.value);
    alert(this.taskDate.value);
    alert(this.taskIsComplete.value);

    obj.taskName = this.taskName.value;
    obj.taskType = this.taskType.value;
    obj.taskDate = this.taskDate.value;
    obj.taskIsComplete = this.taskIsComplete.value;

    localStorage.setItem(this.taskName.value, JSON.stringify(obj));
});

let showWhat = document.querySelector('#localb2');

showWhat.addEventListener('click',function () {
   // alert(localStorage.length);
   // alert(localStorage.key(0));
   for (let i = 0; i < localStorage.length; i++){
       let blockTask = document.createElement('li');
       let pr = JSON.parse(localStorage.getItem(localStorage.key(i)));
       blockTask.innerHTML = pr.taskName + ' ' + pr.taskType + ' ' + pr.taskDate + ' ' + pr.taskIsComplete + '<br>' + '<br>';
       document.body.appendChild(blockTask);
     // alert(localStorage.getItem(localStorage.key(i)));
   }
});

let paintTask = document.querySelector('#localb3');
paintTask.addEventListener('click',()=>{
    let blockTask = document.createElement('li');
    let pr = JSON.parse(localStorage.getItem(localStorage.key(1)));
    blockTask.innerHTML = pr.taskName;
    document.body.appendChild(blockTask);
});