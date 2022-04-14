Webcam.set({
      width: 350,
      height: 300,
      image_format: 'png',
      png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture() {
      Webcam.snap(function (data_uri) {
            document.getElementById("snapshot").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
      });
}
console.log('ML5 Version: ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/M-KbKV65s/model.json', modelLoaded);
function modelLoaded() {
      console.log("Model Loaded!");
}

function predict() {
      img = document.getElementById('captured_image');
      classifier.classify(img, gotResult);
}

function gotResult(error, results) {
      if (error) {
            console.error();
      } else {
            console.log(results);
            document.getElementById("prediction_name").innerHTML = results[0].label;
            gesture = results[0].label;
            if (gesture == "Amazing") {
                  document.getElementById("prediction_emoji").innerHTML = "&#128076;";
            }
            if (gesture == "Victory") {
                  document.getElementById("prediction_emoji").innerHTML = "&#9996;";
            }
            if (gesture == "Good") {
                  document.getElementById("prediction_emoji").innerHTML = "&#128077;";
            }
      }
}