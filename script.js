function firstChar(str) {
 str = str.trim();
  if (str.length === 0) {
    return '';
  } 
  return str.charAt(0);
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
