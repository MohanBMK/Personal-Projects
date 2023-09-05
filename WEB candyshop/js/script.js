function toggleSearchForm() {
    var searchForm = document.getElementById("search-box");
    searchForm.classList.toggle("show");
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
}