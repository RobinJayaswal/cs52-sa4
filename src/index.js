import $ from 'jquery';
import './style.scss';

$('#main').html('Here we go!');

let num = 1;

setInterval(() => {
  $('#main').html(`You've been on this page for ${num} seconds`);
  num++;
}, 1000);
