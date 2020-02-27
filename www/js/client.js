/* globals $ FormData */
var scoutNames = [
  { name: "Danny" },
  { name: "Sam" },
  { name: "Karen" },
  { name: "Clara" },
  { name: "Jack Brandon" },
  { name: "Andy" },
  { name: "Sean" },
  { name: "Trace" },
  { name: "Addison" },
  { name: "Jack Barnhart" },
  { name: "Jackson" },
  { name: "Michael" },
  { name: "Leland" },
  { name: "Donavan" },
  { name: "Ben McIlvaine" },
  { name: "Laila" },
  { name: "Jacob" },
  { name: "Nate" },
  { name: "Paige" },
  { name: "Ben Weatherill" },
  { name: "Elliot" },
  { name: "... GUEST ..." }
];

var teamNames = [
  { num: 95, name: "Grasshoppers", insta_link: null },
  {
    num: 133,
    name: "B.E.R.T.",
    insta_link: "https://www.instagram.com/frcbert133/"
  },
  {
    num: 151,
    name: "Tough Techs",
    insta_link: "https://www.instagram.com/toughtechs151/"
  },
  { num: 190, name: "Team 190", insta_link: "" },
  { num: 254, name: "Cheesy Poofs", insta_link: "" },
  {
    num: 319,
    name: "Big Bad Bob",
    insta_link: "https://www.instagram.com/bigbadbob319/"
  },
  {
    num: 467,
    name: "The Colonials",
    insta_link: "https://www.instagram.com/shrewsburyrobotics467/"
  },
  {
    num: 501,
    name: "Power Knights",
    insta_link: "https://www.instagram.com/frcteam501/"
  },
  { num: 663, name: "Robonauts", insta_link: "" },
  { num: 811, name: "Cardinals", insta_link: "" },
  { num: 971, name: "Spartan Robotics", insta_link: "" },
  {
    num: 1058,
    name: "PVC Pirates",
    insta_link: "https://www.instagram.com/frcteam1058/"
  },
  {
    num: 1307,
    name: "Robosaints",
    insta_link: "https://www.instagram.com/1307robosaints/"
  },
  { num: 1512, name: "Big Red", insta_link: "" },
  { num: 1517, name: "AMP'D UP", insta_link: "" },
  { num: 1519, name: "Mechanical Mayhem", insta_link: "" },
  {
    num: 1729,
    name: "Inconceivable",
    insta_link: "https://www.instagram.com/team_1729/"
  },
  {
    num: 1831,
    name: "Screaming Eagles",
    insta_link: "https://www.instagram.com/frc_1831/"
  },
  {
    num: 3566,
    name: "Gone Fishing",
    insta_link: "https://www.instagram.com/robotics3566/"
  },
  {
    num: 3609,
    name: "Duct Tape Dragons",
    insta_link: "https://www.instagram.com/frc3609/"
  },
  {
    num: 4761,
    name: "Roborockets",
    insta_link: "https://www.instagram.com/robockets.4761/"
  },
  {
    num: 4905,
    name: "Andromeda One",
    insta_link: "https://www.instagram.com/frc4905/"
  },
  {
    num: 4909,
    name: "Bionics",
    insta_link: "https://www.instagram.com/team4909/"
  },
  {
    num: 4929,
    name: "Maroon Monsoon",
    insta_link: "https://www.instagram.com/frcteam4929/"
  },
  {
    num: 5633,
    name: "Hyde Mecha Wolves",
    insta_link: "https://www.instagram.com/hyde.robotics/"
  },
  {
    num: 5687,
    name: "Outliers",
    insta_link: "https://www.instagram.com/frc5687/"
  },
  {
    num: 5902,
    name: "The Wire Clippers",
    insta_link: "https://www.instagram.com/frc5902/"
  },
  {
    num: 6153,
    name: "The Blue Crew",
    insta_link: "https://www.instagram.com/bluecrewrobotics/"
  },
  {
    num: 6161,
    name: "Equilibrium",
    insta_link: "https://www.instagram.com/team_6161/"
  },
  { num: 6691, name: "Torque", insta_link: "" },
  {
    num: 6763,
    name: "FUSION",
    insta_link: "https://www.instagram.com/fusion6763/"
  },
  {
    num: 6933,
    name: "Archytas",
    insta_link: "https://www.instagram.com/archytasrobotics/"
  },
  { num: 7133, name: "Steam Makers", insta_link: "" },
  {
    num: 7416,
    name: "Northern Horizons",
    insta_link: "https://www.instagram.com/northernhorizons7416/"
  },
  { num: 7913, name: "'Bear'ly Functioning", insta_link: "" },
  { num: 8046, name: "Laker Bots", insta_link: "" },
  { num: 99999, name: "... OTHER ... (mention in notes)", insta_link: "" }
];

$(document).ready(() => {
  $("#the-section-with-questions")
    .addClass("d-block")
    .removeClass("d-none");
  $("#the-section-after-pressing-submit")
    .addClass("d-none")
    .removeClass("d-block");

  // START OFFLINE DATA ACCESS
  loadLocalScouts();
  loadLocalTeams();
  // END OFFLINE DATA ACCESS

  // // START ONLINE DATA ACCESS
  //   $.ajax({
  //     url: "/team/",
  //     type: "GET",
  //     dataType: "json",
  //     success: data => {
  //       console.log("You received some data!", data);
  //       $.each(data, function(i, item) {
  //         $("#numBox").append(
  //           $("<option>", {
  //             value: item.num,
  //             text: item.num + ": " + item.name
  //           })
  //         );
  //       });
  //     }
  //   });

  //   $.ajax({
  //     url: "/user/",
  //     type: "GET",
  //     dataType: "json",
  //     success: data => {
  //       console.log("You received some data!", data);
  //       $.each(data, function(i, item) {
  //         $("#nameBox").append(
  //           $("<option>", {
  //             value: item.num,
  //             text: item.name
  //           })
  //         );
  //       });
  //     }
  //   });
  // // END ONLINE DATA ACCESS

  $("#createQr").click(e => {
    e.preventDefault();
    let ballAbilityValue = 0;
    $('input[name="ball_ability_checkbox"]:checked').each(function() {
      ballAbilityValue += parseInt(this.value);
    });
    let shooterDistanceValue = 0;
    $('input[name="shooter_distance_radio"]:checked').each(function() {
      shooterDistanceValue += parseInt(this.value);
    });

    $("#qrcode").html("");
    // generate qr code
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      // scouting_type, teamNum, weight, trench, ball, shooter, notes, created_time, created_by, drive_train
      text:
        "pit," +
        $("#numBox").val() +
        "," +
        $("#weightBox").val() +
        "," +
        $('input[name="trench_radio"]:checked').val() +
        ballAbilityValue +
        shooterDistanceValue +
        $("#notesBox").val() +
        Date.now() +
        $("#nameBox").val() +
        $('input[name="drive_train_radio"]:checked').val() +
        $('input[name="wheel_radio"]:checked').val(),
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    $("#clearFormButton").removeClass("invisible");

    //     // send data directly to server
    //     $.ajax({
    //       // all URLs are relative to http://localhost:3000/
    //       url: "/pit-report/",
    //       type: "POST", // <-- this is POST, not GET
    //       data: {
    //         num: $("#numBox").val(),
    //         weight: $("#weightBox").val(),
    //         trench: $('input[name="trench_radio"]:checked').val(),
    //         ball_ability: ballAbilityValue,
    //         shooter_distance: shooterDistanceValue,
    //         notes: $("#notesBox").val(),
    //         created_time: Date.now(),
    //         created_by: $("#nameBox").val(),
    //         drive_train: $('input[name="drive_train_radio"]:checked').val(),
    //         color_wheel: $('input[name="wheel_radio"]:checked').val()
    //       },
    //       success: data => {
    //         console.log(data.message);
    //         $("#the-section-with-questions")
    //           .addClass("d-none")
    //           .removeClass("d-block");
    //         $("#the-section-after-pressing-submit")
    //           .addClass("d-block")
    //           .removeClass("d-none");
    //         $("#after-title").html("You did it!");
    //         $("#after-status").html(data.message);
    //       }
    //     });
  });

  $("#clearFormButton").click(e => {
    e.preventDefault();
    location.reload();
    return false;
  });
  
  // define a generic Ajax error handler:
  // http://api.jquery.com/ajaxerror/
  $(document).ajaxError(() => {
    $("#status").html("Error: unknown ajaxError!");
  });
});

function loadLocalScouts() {
  $.each(scoutNames, function(i, item) {
    $("#nameBox").append(
      $("<option>", {
        value: item.name,
        text: item.name
      })
    );
  });
}

function loadLocalTeams() {
  $.each(teamNames, function(i, item) {
    $("#numBox").append(
      $("<option>", {
        value: item.num,
        text: item.num + ": " + item.name
      })
    );
  });
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}