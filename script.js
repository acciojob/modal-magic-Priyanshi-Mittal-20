//your JS code here. If required.
let btn=document.querySelector("#openModal")
let removeBtn=document.querySelector(".remove-btn")
let modalEle=document.querySelector(".modal")
btn.addEventListener("click",show)
removeBtn.addEventListener("click",hide)

function hide()
{
	modalEle.style.display="none"
}

function show()
{
	modalEle.style.display="block"
}

modalEle.addEventListener("click", function (event) {
    if (event.target === modalEle) {
        hide();
    }
});