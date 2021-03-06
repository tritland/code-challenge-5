app.controller('MessagesController', ['$http', function($http){
    console.log('Messages Controller has been loaded');
    var self = this;
    self.messages = {
        list:[]
    };

    self.postNewMessage = function(newMessage){
        $http({
            method: 'POST',
            url: '/messages',
            data: newMessage,
        }).then(function(response){
            console.log('post response:', response.data);
            self.getMessages();
        });
    };
      
    self.getMessages = function(){
        $http({
            method: 'GET',
            url: '/messages',
        }).then(function (response) {
            console.log(response.data);
            self.messages.list = response.data;
        });
    };

    self.getMessages();
}]);