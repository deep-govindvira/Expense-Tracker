const CommentInputEle = document.getElementById("CommentInput");
const CommentBtn = document.getElementById("CommentBtn");
const BlogEle = document.getElementById("Blog");

let email = JSON.parse(localStorage.getItem("currentuseremail"));

CommentBtn.onclick = () => {
    if(CommentInputEle.value == "" ) {
        return;
    }
    let Blog = getBlogList();
    if(email == undefined) {
        alert("Please signin first");
        return;
    }
    Blog.push([getDatabase()[email]["username"], CommentInputEle.value, new Date()]);
    Blog.sort((a, b) =>{
        return new Date(b[2]) - new Date(a[2]);
    });
    setBlogList(Blog);
    console.log(Blog);
    let result = "";
    getBlogList().forEach(ele => {
        // result += ele[0] + " : <br>" +  `<textarea cols="100" rows="5" style="text-align: left;" disabled>${ele[1]} ( ${ele[2]}) </textarea><br><br>`
        result += `<div class="form-group">
        <label for="exampleFormControlTextarea1">${ele[0]}</label>
        <textarea class="form-control" rows="3" disabled>${ele[1]} ( ${ele[2]})</textarea>
    </div>`
        // result += ele[0] + " : " + ele[1] + " (" + ele[2] + ")" + `<br><br>`;
    });
    // let res = `
    // <li>
    //     ${CommentInputEle.value}
    // </li>
    // `;
    // BlogEle.innerHTML += res;
    BlogEle.innerHTML = result;
};

// let Bg = getBlogList();
// alert(Bg.sort(function(a, b){return a[2] > b[2]}));
getBlogList().sort((a, b) =>{
    return new Date(b[2]) - new Date(a[2]);
});
// steBlogList(Bg);
// let result = "";
getBlogList().forEach(ele => {
    BlogEle.innerHTML += `<div class="form-group">
    <label for="exampleFormControlTextarea1">${ele[0]}</label>
    <textarea class="form-control" rows="3" disabled>${ele[1]}    (${ele[2]})</textarea>
</div>`;
    // BlogEle.innerHTML += ele[0] + " : " + ele[1] + " (" + ele[2] + ")" + `<br><br>`;
    // result += ele[0] + " : " + ele[1] + " (" + ele[2] + ")" + `<br>`;
});
// BlogEle.innerHTML = result;
