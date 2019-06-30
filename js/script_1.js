function stringLastSymbol(string)
{
    return string.slice(-1);
}

function stringWithOutLastSymbol(string)
{
    return (string.slice(0, -1));
}
	
function reverseString(string)
{
	  return string.split('').reverse().join('');
}

function reverseArray(string)
{
	var stringCopy = '';
	for (var i = 1; i <= string.length; i++)
	{
		stringCopy += string[string.length - i];
	}
	return stringCopy
}

function removeBlanks(string)
{
    string = string.trim();
	  var stringCopy = '';
	  var state = 0;
	  for (var i = 0; i < string.length; i++)
	  {
		    if (string[i] == ' ')
		    {
			      if (state == 0)
			      {
				        stringCopy += string[i];
			      }
				    state = 1;
		    }
		    else
		    {
			      stringCopy += string[i];
			      state = 0;
		    }
	  }
	  return stringCopy;
}
	
function callAll(string)
{
	  console.log(string);
	  console.log(stringLastSymbol(string));
	  console.log(stringWithOutLastSymbol(string));
	  console.log(reverseString(string));
	  console.log(reverseArray(string));
		console.log(removeBlanks(string));
}

callAll(prompt());