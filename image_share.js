if (Meteor.isClient) {
  var img_data = [
  {
    img_src:"hut.jpg",
    img_alt:"hut on the beach"
  },
  {
    img_src:"bike.jpg",
    img_alt:"bike in desert"
  },
  {
    img_src:"bike2.jpg",
    img_alt:"bike2 in desert"
  },

  ];

  Template.images.helpers({images:img_data});

  Template.images.events({
    'click .js-image': function(event){
      $(event.target).css("width", "60px");

    }
  });
}

if (Meteor.isServer) {
  console.log("I am server");
}
