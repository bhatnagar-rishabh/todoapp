// put js for todo app here


function doSomething(textarea) {
    if (textarea.value.length > 5) {
        textarea.rows = 50;
    } else {
        textarea.rows = 15;
    }
}