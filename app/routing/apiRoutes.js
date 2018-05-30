var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/new", function (req, res) {
        // console.log("POST ON BACK END!")
        var newFriend = req.body;
        var bestFriend = "";
        var lowestScore = Infinity;

        friends.forEach(function (friend) {
            var difference = 0;
            for (var i = 0; i < friend.scores.length; i++) {
                difference += Math.abs(friend.scores[i] - newFriend.scores[i]);
            }

            if (difference < lowestScore) {
                lowestScore = difference;
                bestFriend = friend;
                console.log(bestFriend);
                
            } 
            // console.log(difference);
        });

        friends.push(newFriend);
        res.json(bestFriend);
        // console.log(req.body);
    });
};


// var score = 0;
// for (var i = 0; i < potentialMatches.length; i++) {  // iterate 3 potential matches
//     for (var j = 0; j < userAnswers.length; j++) {     // iterate through answers array
//         score += userAnswers[j] - potentialMatches[i].answers[j];
//         if (score < difference) {
//             difference = score;
//             bestFriend = potentialMatch[i]
//         }
//     }
// }