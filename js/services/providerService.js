//service style, probably the simplest one
providerapp.service('helloWorldFromService', function() {
    this.sayHello = function() {
        return "Hello, World!"
    };
});


    
//provider style, full blown, configurable version     
providerapp.provider('helloWorld', function() {

    this.name = 'Default';

    this.$get = function() {
        var name = this.name;
        return {
            sayHello: function() {
                return "Hello, " + name + "!"
            }
        }
    };

    this.setName = function(name) {
        this.name = name;
    };
});