const SportsApiurl=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=2f261fac15214f20956b0fe8119baceb`;
window.fetch(SportsApiurl).then(data=>{
    data.json().then(sportsnews=>{
        console.log(sportsnews)
        
        let sportsData=sportsnews.articles;
        let output='';
        for(let sports of sportsData){
            output +=`
            
            <h1 class="h1Title">${sports.title}</h1>
            <p>${sports.description}</p>
            <img src="${sports.urlToImage}">
            <p>${sports.publishedAt}</p>
            `;
        }
        document.getElementById('left').innerHTML=output;
    }).catch(err=>console.log(err));
}).catch(err=>console.log(err));
//time javascript here
setInterval(()=>{
    var time=new  Date().toLocaleTimeString();
    document.getElementById("time").innerHTML=time;

},1000);

const EntertainmentApiurl=`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=2f261fac15214f20956b0fe8119baceb`;
window.fetch(EntertainmentApiurl).then(data=>{
    data.json().then(entertainmentnews=>{
        console.log(entertainmentnews)
        
        let entertainmentData=entertainmentnews.articles;
        let output='';
        for(let entertainments of entertainmentData){
            output +=`
            
            <h1 class="h1Title">${entertainments.title}</h1>
            <p>${entertainments.description}</p>
            <img src="${entertainments.urlToImage}">
            <p>${entertainments.publishedAt}</p>
            `;
        }
        document.getElementById("right").innerHTML=output;
    }).catch(err=>console.log(err));
}).catch(err=>console.log(err));

const TopHeadlineApiurl=`https://newsapi.org/v2/top-headlines?country=us&apiKey=2f261fac15214f20956b0fe8119baceb`;
window.fetch(TopHeadlineApiurl).then(data=>{
    data.json().then(topHeadlinenews=>{
        console.log(topHeadlinenews)
        
        let topHeadlineData=topHeadlinenews.articles;
        let output='';
        for(let top of topHeadlineData){
            output +=`
            
            <h1 class="h1Title">${top.title}</h1>
            <p>${top.description}</p>
            <img src="${top.urlToImage}">
            <p>${top.publishedAt}</p>
            `;
        }
        document.getElementById("middle").innerHTML=output;
    }).catch(err=>console.log(err));
}).catch(err=>console.log(err));


    