let textArea = document.getElementById('contentsBox');
let tweetList = []
let id = 0;  // must define the id outside.
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


// add the Tweet
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
        originTweetID: originid  // Id from the parent
    }
    //3. push retweet object into tweetList
    tweetList.push(retweetObject);

    id++
    render(tweetList)
    console.log(tweetList);
}

//delete Tweet 
let deleteTweet = (deleteId) => {
    // 1. remove original tweeter id and retweet id 
    tweetList = tweetList.filter(e => e.id !== deleteId && e.originTweetID !== deleteId)
    // 2. show again. 
    render(tweetList);
}

//Like & unlike button
let toggle = (i) => {
    tweetList[i].isDone = !(tweetList[i].isDone)
    render(tweetList)
}

// Render 
let render = (array) => {
    let htmlForTweet = array.map((item) => 
    `<li>${item.contents} 
    <button id="likeBtn">like</button>

    <button onclick="retweet(${item.id})">retweet</button>
    <button onclick="deleteTweet(${item.id})">delete</button>
    </li>`).join('')
    document.getElementById('tweetArea').innerHTML = htmlForTweet
}




