let text_form = document.getElementById("text_form");
const int = 300;

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms * 1000));
}

text_form.addEventListener("keypress", test_ivent);

async function openWindow(params) {
    let tmp = window.open(
        params,
        "_blank",
        "width=500,toolbar=yes,menubar=yes,scrollbars=yes"
    );
    await sleep(int);
    tmp.close();
}

async function test_ivent(e) {
    if (e.keyCode === 13) {
        console.log(text_form.value);
        while (true) {
            openWindow(text_form.value);
            openWindow(text_form.value);
            openWindow(text_form.value);
            openWindow(text_form.value);
            await sleep(int);
        }
    }
    return false;
}
