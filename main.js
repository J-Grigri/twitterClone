let textArea = document.getElementById('contentsBox');
let tweetList = [];
let hashtagArray = []
let id = 0;
let remain = 140

// Letter count at the TextArea
let letterCount = () => {
        let remain = 140 - textArea.value.length; // calculation

        if (remain < 0) {
            document.getElementById('charCountArea').innerHTML = `Remaining : ${remain}`.fontcolor("red");
        } else {
            document.getElementById('charCountArea').innerHTML = `Remaining : ${remain}`;
        }
    }
    // Event listener on contents box
textArea.addEventListener('input', letterCount);

// Hashtag recognition
// document.getElementById

// for (let i=0; i<textArea.value.length; i++){
//     if (textArea === '#'){
//         let hashtag = 
//     }
// }

// add a Tweet
let addTweet = () => {
    let tweet = {
        id: id, // unique value 
        contents: textArea.value
    }
    tweetList.push(tweet); //add a new tweet to tweetList array

    render(tweetList);
    id++;
    contentsBox.value = "Start typing...";
    charCountArea.innerHTML = `Remaining : 140`;
}

// retweet function
let retweet = (originid) => {

        // 1. find the tweet that you want to retweet
        let originTweet = tweetList.find((item) => item.id == originid)

        // 2. make the retweet object and it will have the same contents with original tweet and parents id 
        let retweetObject = {
                id: id,
                contents: originTweet.contents,
                originTweetID: originid // Id from the parent
            }
            //3. push retweet object into tweetList
        tweetList.push(retweetObject);

        id++
        render(tweetList)
        console.log(tweetList);
    }
    // Like button 
function liketweet(x) {
    x.classList.toggle("fa-thumbs-down");
}


//delete Tweet 
let deleteTweet = (deleteId) =>
    // 1. remove original tweeter id and retweet id 
    tweetList = tweetList.filter(e => e.id !== deleteId && e.originTweetID !== deleteId)
    // 2. show again. 
render(tweetList);
}


// Render 
let render = (array) => {
    let htmlForTweet = array.map((item) =>
        `<li>${item.contents} 

    <button><i onclick="liketweet(this)" class="fa fa-thumbs-up"></i></button>
    <button onclick="retweet(${item.id})">retweet</button>
    <button onclick="deleteTweet(${item.id})">delete</button>
    </li>`).join('')
    document.getElementById('tweetArea').innerHTML = htmlForTweet
}