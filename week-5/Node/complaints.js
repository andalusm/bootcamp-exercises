const types = require('./consts');
const complaintsHandler = require('./complaintsHandler');

handleComplaint =  complaintsHandler.handleComplaints
let complaint1 = {
    text: "I'm not getting enough money",
    type: types.FINANCE//use the FINANCE type from the consts module
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: types.FINANCE//use the FINANCE type from the consts module
}

let complaint3 = {
    text: "I'm always full of energy",
    type: types.EMOTIONS//use the EMOTIONS type from the consts module
}

handleComplaint(complaint1) //should print "Money doesn't grow on trees, you know."
handleComplaint(complaint2) //should print "Money doesn't grow on trees, you know."
handleComplaint(complaint3) //should print "It'll pass, as all things do, with time."
