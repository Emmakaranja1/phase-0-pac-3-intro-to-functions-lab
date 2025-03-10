function shout(string) {
    return string.toUpperCase(); // This function converts a string to uppercase
    
  }
  function whisper(string) {
    return string.toLowerCase(); // This function converts a string to lowercase
  }
  function logShout(string) {
    console.log(string.toUpperCase()); // logs the string in all uppercase
  }
  function logWhisper(string) {
    console.log(string.toLowerCase()); // logs the string in all lowercase
  }
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!"; // Returns this if the input string is lowercase
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!"; // Example response for uppercase input
    }else if (string === "Let's have dinner together!") {
        return "I would love to!"; // New condition for the specific string
    }
  }