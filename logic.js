
<script src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"></script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtI9vyfLIUZW_o1-wDnCJCF_TYk-FAm0w",
    authDomain: "train-schedule-de5f7.firebaseapp.com",
    databaseURL: "https://train-schedule-de5f7.firebaseio.com",
    projectId: "train-schedule-de5f7",
    storageBucket: "train-schedule-de5f7.appspot.com",
    messagingSenderId: "916701060483"
  };
  firebase.initializeApp(config);

var database = firebase.database();
// button for adding train input.
$("#add-employee-btn").on("click", function(event) {
    event.preventDefault();

  // Grabs user input
  var tName = $("#name-input").val().trim();
  var tDestination = $("#destination-input").val().trim();
  var tTime = moment($("#time-input").val().trim(), "HH:mm").format("X");
  var tFrequency = $("#frequency-input").val().trim();

   // Creates local "temporary" object for holding train data
   var trainInfo = {
    trainName: tName,
    destination: tDestination,
    firstTrainTime: tTime,
    frequency: tFrequency
  };
    // Uploads employee data to the database
    database.ref().push(trainInfo);
      // Logs everything to console
  console.log(tName.trainName);
  console.log(tDestination.destination);
  console.log(tTime.firstTrainTime);
  console.log(tFrequency.frequency);

  alert("Train successfully added");

  // Clears all of the text-boxes
//   still need to change this.
  $("#employee-name-input").val("");
  $("#role-input").val("");
  $("#start-input").val("");
  $("#rate-input").val("");
});
