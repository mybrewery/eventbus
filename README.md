# Eventbus

## Concept
https://en.wikipedia.org/wiki/Publish–subscribe_pattern

## Using

```javascript
var eventbus = new Eventbus;

/*subscribing for events*/
eventbus.sub("hello", function(){
  console.log("hello!");
});

eventbus.sub("hello", function(data){
  console.log(["hello", data.user].join(" "));
});

eventbus.sub("bye", function(data){
  console.log("buvaite");
});

/*dispatching events and passing data to subscribers*/
eventbus.pub("hello", {
  user: "Elvis"
});
// "hello!"
// "hello Elvis"

eventbus.pub("bye");
// "buvaite"
		

```
