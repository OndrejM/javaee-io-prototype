render = function(comp){
  return function() {
    if (Meteor.isClient) {
        Meteor.startup(function() {
            // Use Meteor.startup to render the component after the page is ready
            ReactDOM.render(
               comp,
               document.getElementById("render-target"));
        })
    }
  }
};
