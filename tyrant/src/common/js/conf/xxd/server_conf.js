;
(function() {
    if (window.TrantServerConf === undefined) {
        window.TrantServerConf = {
            tyrant: "http://192.168.33.47:8080/tyrant"
        };
    }
    if (window.AliceServerConf === undefined) {
        window.AliceServerConf = {
            alice: "http://192.168.33.47:8080/alice"
        };
    }
})();