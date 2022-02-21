function storeSearchterm(term) {

    term.addEventListener("keypress",(e)=>{
        if(e.key=="Enter"){
          window.location.href="./search.html"
          let input_value=document.getElementById("searchbar").value;
    
          localStorage.setItem("serch_term", input_value)
        }
      });

}

export default storeSearchterm;