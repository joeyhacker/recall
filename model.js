
var _User = {
    name: String,
    username: String,
    password: String,
    createTime: { type: Date, default: Date.now }
}

var _Snippet = {
    title: String,
    content: String,
    createTime: Date,
    updateTime: Date,
    creator: String,
    type: String
}


module.exports = function(mongoose, schema){
    console.log('building models ...');
    return {
        User: mongoose.model('User', new schema(_User)),
        Snippet: mongoose.model('Snippet', new schema(_Snippet))
    }
}

