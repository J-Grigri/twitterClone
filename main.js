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
// add a Tweet
let addTweet = () => {
    let tweet = {
        id: id, // unique value 
        contents: textArea.value
    }
    tweetList.unshift(tweet); //add a new tweet to tweetList array
    render(tweetList);
    id++;
    contentsBox.value = "";
    charCountArea.innerHTML = `Remaining characrters: 140`;
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
        tweetList.unshift(retweetObject);
        id++
        render(tweetList)
        console.log(tweetList);
    }
    // Like button 
function liketweet(x) {
    x.classList.toggle("fa-thumbs-down");
}
//delete Tweet 
let deleteTweet = (deleteId) => {
    // 1. remove original tweeter id and retweet id 
    tweetList = tweetList.filter(e => e.id !== deleteId && e.originTweetID !== deleteId);
    render(tweetList);
};
// Render 
let render = (array) => {
    let htmlForTweet = array.map((item) => {
        let hashtag = item.contents.replace(/^#\w+$/, (item) => { return `<a href="#">${item}</a>` });
        console.log(hashtag);
        return `
        <div class="container col-sm-5" style="margin-top: 30px;">
        <div class="card" style="border:none; border-radius: 10px lightblue;">
            <div class="card-header" style="background-color: lightblue; border-top: 1px solid rgb(242, 246, 250);border-bottom: 1px solid rgb(242, 246, 250);">
                <img src="robot.png" /> <span>name   </span><span>  time</span>
            </div>
            <div class="card-body" style="background-color: white;">
                <div style="word-wrap: break-word; ">
                    <div style="font-size: 20px; padding:10px; margin-top: 20px; margin-bottom: 20px;">${hashtag}</div>
                </div>
            </div>
            <div class="card-footer text-muted text-center " style="border-top: 1px solid rgb(242, 246, 250);border-bottom: 1px solid rgb(242, 246, 250);display: flex; justify-content: space-between; background-color: lightblue;">
                <button style="color: grey;" type="button " class="btn btn-light " onclick="liketweet(this) "><i  class="fa fa-thumbs-up "></i></button>
                <button style="color: grey;" type="button " class="btn btn-light " onclick=""><i  class="fa fa-comments "></i></button>
                <button style="color: grey;" type="button " class="btn btn-light " onclick="retweet(${item.id}) "><i  class="fa fa-share-square "></i></button>
                <button style="color: grey;" type="button " class="btn btn-light " onclick="deleteTweet(${item.id}) "><i  class="fa fa-trash "></i></button>
            </div>
        </div>
    </div>`
    }).join('')
    document.getElementById('tweetArea').innerHTML = htmlForTweet
}