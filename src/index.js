import $ from 'jquery';
import './style.scss';

$('#main').html('Here we go!');

// following function is based off of that from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
// it defines a generator function that returns a continuously incrementing number
function* countGenerator() {
  let i = 0;
  while (i < 10000) {   // if site left open for 10,000 seconds, assume they are not still watching counter
    yield i++;
  }
}

const counter = countGenerator();

setInterval(() => {
  $('#main').html(`You've been on this page for ${counter.next().value} seconds`);
}, 1000);
