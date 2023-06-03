const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCaseString(element) {
  return element.split(' ').map(
    function(word){
      return(word.charAt(0).toUpperCase()+word.slice(1)
      )
    }
  ).join(' ');
}

const titleCased1 = () => {return tutorials.map(titleCaseString)}

const titleCased = () => {
  const updatedArray = tutorials.map(element =>
    element.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ') 
  )
  return updatedArray
};



