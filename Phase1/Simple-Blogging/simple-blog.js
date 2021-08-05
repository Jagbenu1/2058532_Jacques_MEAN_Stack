let array = [];

const outputBlog = () => {
    let Btitle = document.getElementById('title').value;
    let Barticle = document.getElementById('article').value;
    let Bimage = document.getElementById('image').value;
    let cardContent = "";

    let blogInfo = {Btitle, Barticle, Bimage};
    array.push(blogInfo);

    if(array.length != 0){

        for(let i =0; i < array.length; i++){
            cardContent += `
            <div class="col-sm-3">
                <div class="card" style="width: 12rem; margin-bottom: 10px;">
                    <img class="card-img-top" src="${array[i].Bimage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMLtlaN-XUUkRhcfDUt3U_nFan7BsjcniwV8PLmw75r4zGgdlm2rGf00jTQ&usqp=CAc"}" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${array[i].Btitle}</h5>
                            <p class="card-text">${array[i].Barticle}</p>
                        </div>
                </div>
            </div>
        `;
            document.getElementById("data").innerHTML = cardContent;
        }
    }
}