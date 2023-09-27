// Function to return a string in all caps
function shout(string) {
    return string.toUpperCase();
  }
  // Function to return a string in all lowercase
  function whisper(string) {
    return string.toLowerCase();
  }
  // Function to log a string in all caps using console.log()
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  // Function to log a string in all lowercase using console.log()
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  // Function to respond based on the input string
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    } else {
      return "I don't understand.";
    }
  }
  
  // Example usage of the functions
  const message = "Hello, World!";
  console.log(shout(message));
  console.log(whisper(message));
  logShout(message);
  logWhisper(message);
  
  const response1 = sayHiToHeadphonedRoommate("hello");
  const response2 = sayHiToHeadphonedRoommate("HELLO");
  const response3 = sayHiToHeadphonedRoommate("Let's have dinner together!");
  
  console.log(response1);
  console.log(response2);
  console.log(response3);
  