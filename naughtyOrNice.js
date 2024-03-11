
/************ Naughty or Nice **********/       

// Given a year of JSON data as an object.

// Return value should be depending on the total number of occurences.

// For instance, if ""Nice"" is greater than "Naughty", it will return "Nice". However, if both value are equal, return "Nice".

// I like the following solution as it is basic, use array methods which makes it more straightforward. 

function naughtyOrNice(data) {
    const str = JSON.stringify(data);
    return str.split("Nice").length < str.split("Naughty").length
      ? "Naughty!"
      : "Nice!";
  }
