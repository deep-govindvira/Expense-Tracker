const amtEle = document.getElementById("amt");
const dmyEle = document.getElementById("dmy");
const btnEle = document.getElementById("btn");
const selEle = document.getElementById("sel");
const addcatEle = document.getElementById("addcat");
const catEle = document.getElementById("cat");
btnEle.onclick = () => {
    let key = dmyEle.value;
    let val = amtEle.value;
    let a = get_dmy(key);
    a.push(val);
    set_dmy(key, a);
    let option = document.createElement("option");
    option.text = key;
    selEle.add(option, selEle[0]);
    console.log(get_database());
}
addcatEle.onclick = () => {
    if(catEle.value == "") {
        return;  
    }
    let option = document.createElement("option");
    option.text = catEle.value;
    selEle.add(option, selEle[0]);
}