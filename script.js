$(function () {
    $(".style_input").click(function () {
      const bgColor = [
        "red",
        "yellow",
        "green",
        "blue",
        "purple",
        "orange",
        "black",
        "white"
      ];
      let index = $(".style_input").index(this);
      $(".wrapper").css("background-color", bgColor[index]);
    });
  });
