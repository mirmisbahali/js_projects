const saveBtn = document.querySelector("#saveBtn")
const delBtn = document.querySelector("#deleteBtn")
const preview = document.querySelector("#preview")
const txtAr = document.querySelector("#noteTxt");


saveBtn.addEventListener('click', function() {


    let text = txtAr.value

    if (saveBtn.childNodes[0].classList.contains('fa-save'))
    {
        preview.innerHTML = marked(text)
        txtAr.classList.add('d-none')
        saveBtn.childNodes[0].classList.remove('fa-save')
        saveBtn.childNodes[0].classList.add('fa-edit')
    } else {
        txtAr.classList.remove('d-none')
        preview.classList.add('d-none')
        txtAr.value = text
        saveBtn.childNodes[0].classList.remove('fa-edit')
        saveBtn.childNodes[0].classList.add('fa-save')
    }
})

