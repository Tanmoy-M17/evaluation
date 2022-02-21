async function apiCall(url) {
try{
    let res= await fetch(url);
    let data = res.json();
    return data;
}
    catch(err){
        console.log("err:",err);
    }
}


function appendArticles(articles, main) {
   articles.forEach((element) => {
         let div= document.createElement("div");

         let titel=document.createElement("p");
         titel.innerText=element.title;
         
       let image= document.createElement("img");
       
       image.src=element.urlToImage;

       let news = document.createElement("p");
       news.innerText=element.description;

       div.append(titel,image,news);
       div.onclick=()=>{
            
         localStorage.setItem("article",JSON.stringify(element));

            window.location.href="news.html";
       }

       main.append(div);
    });

};

export { apiCall, appendArticles };