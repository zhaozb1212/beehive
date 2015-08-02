var events = (function () {
    var _topics = {};
    return {
        subcribe: function (topic, listener) {
            (!_topics[topic]) && (_topics[topic] = []);
            (typeof listener === 'functions') && _topics[topic].push(listener);
        },
        emit: function (topic) {
            var args = Array.prototype.slice(arguments, 1),
                handlers = _topics[topic] || [];
            handlers.forEach(function (handler) {
                handler.apply(null, args);
            })
        }
    }
}());

var events = (function () {
    var _topics = {};
    return {
        subscribe: function (topic, listener) {
            console.log('subscribe');
            (!_topics[topic]) && (_topics[topic] = []);
            (typeof listener === 'functions') && _topics[topic].push(listener);
        },
        emit: function (topic) {
            var args = Array.prototype.slice(arguments, 1),
                handlers = _topics[topic] || [];
            handlers.forEach(function (handler) {
                handler.apply(null, args);
            })
        }
    }
}());