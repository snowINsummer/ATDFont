;
(function() {
    if (window.TrantServerConf === undefined) {
        window.TrantServerConf = {
            tyrant: "http://localhost:8080"
        };
    }
    if (window.AliceServerConf === undefined) {
        window.AliceServerConf = {
            alice: "http://localhost:8080"
        };
    }
})();