function scuberGreetingForFeet(trip) {
  if (trip <= 400) {
    return `This one is on me!`
  } else if (trip > 400 && trip < 2000) {
    return `That will be twenty bucks.`
  } else if (trip > 2000 && trip <= 2500) {
    return `I will gladly take your thirty bucks.`
  } else if (trip > 2500) {
    return `No can do.`
  };
  // Write your code here!
}

function ternaryCheckCity(destination) {
  return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  // Write your code here!
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
    // Write your code here!
  }};