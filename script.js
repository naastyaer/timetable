let  userName = prompt('Введите свое имя')
let myTitle = document.getElementById('title')
if(userName){
    myTitle.innerHTML = 'Ваш список дел, ' + userName
} else{
    myTitle.innerHTML = 'Ваш список дел, Аноним'
}


let count = 0 
function add(){
    let myList = document.getElementById('list')
    let myInput = document.getElementById('input')
    let value = myInput.value
    if (value){
        if(count<=4){
        count = count+1 
        myList.innerHTML= myList.innerHTML + '<p>'+ count +'.'+ value + '</p>'
    } else {
        alert('вы добавили уже 5 дел, пора идти их делать!')
    }
   
    }else{
        alert('вы не ввели ни одно дело')
    }
    
}