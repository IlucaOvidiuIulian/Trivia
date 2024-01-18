// const ADRESA_API = "https://jsonplaceholder.typicode.com/posts/";
const ADRESA_API = "https://opentdb.com/api.php?amount=10";

window.onload = function () {
    getAll();

    document.querySelector("#continut").onclick = function (e) {
        if (e.target.className == "more") {
            var id = e.target.dataset.link;
            getPost(id);
        } else if (e.target.className == "back") {
            getAll();
        }
    };
};
