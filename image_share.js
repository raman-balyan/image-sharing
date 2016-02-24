if (Meteor.isClient) {
  var img_data = {
    img_src:"hut.jpg",
    img_alt:"hut on the beach"
  };

  Template.images.helpers(img_data);
}

if (Meteor.isServer) {
  console.log("I am server");
}
