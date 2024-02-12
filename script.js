$(document).ready(function () {
  var cardOpen = false; // Flag to track card state

  $(".container").on("click", function () {
      var $card = $(".card");
      
      // Check the flag to determine the animation
      if (!cardOpen) {
          // Card is closed, open it
          $card.stop().animate({ top: "-90px" }, "slow");
          cardOpen = true; // Update flag
      } else {
          // Card is open, close it
          $card.stop().animate({ top: 0 }, "slow");
          cardOpen = false; // Update flag
      }
  });
});
