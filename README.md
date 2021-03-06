# Twitter clone project

## Features v1:

* [X] The user should be able to enter a message into a text field.
* [X] The user should be able to press "Tweet" and see the message pop in below the text box.
* [X] The user should see a "count" that displays how many more characters the user has remaining, counting down from 140.
* [X] Upon tweeting, the characters remaining text should reset back to 140, and the field should be cleared.
    - done by adding charCountArea.innerHTML = `Remaining : 140` to the addTweet function
* [X] The application should disallow text of greater than 140 characters.
    - done by maxlength property in textArea input field
* [X] The user should be able to "Retweet". Clicking Retweet immediately inserts a copy of that tweet below the original tweet.
* [X] The user should be able to "Like". When "Like" is clicked, the text should change to "Unlike". When "Unlike" is clicked, the text should change to "Like". Alternatively, use a heart icon (colored or not colored).
* [X] When a "Liked" tweet is retweeted, the new tweet should not be liked.
* [X] Each tweet has an optional hashtag. The hashtag should be linked with an anchor tag.
    * identify the word (either # or @) either as you type (event: space-bar) or at the end of the sentence (split the whole sentence into arrays of string and check each of them).
    * For #: if the word has # at the front, then add that word to hashtags array (each tweet should have 1 hashtags array. Push that word into the hashtags array.
* [X] The user should be able to delete a tweet.

## Features v2:
* [ ] Download and upload the list of tweets using the myjson api, as shown in class.
* [ ] Users can mention other users. Any string that starts with @username will be highlighted in blue.
* [ ] The user can click on a hashtag, and only other tweets with that hashtag are shown.
* [X] When the user deletes a tweet, all retweets should be deleted.
* [ ] Any tweet with an image URL will have the image automatically expanded in the tweet.
