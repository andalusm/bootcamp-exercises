const types = require('./consts');

function handleComplaints(complaint){
    if(complaint.type == types.FINANCE)
        console.log("Money doesn’t grow on trees, you know.")
    else if(complaint.type == types.WEATHER)
        console.log("It is the way of nature. Not much to be done.")
    else if(complaint.type == types.EMOTIONS)
        console.log("It’ll pass, as all things do, with time.")


}
module.exports.handleComplaints = handleComplaints;