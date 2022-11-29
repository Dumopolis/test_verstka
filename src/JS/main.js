import $ from 'jquery';
import { scroll, handleButton, useAnimate } from './scrollify'
import { timer } from './timer'
import { comments } from './commentSlick'
import { event } from './event'
import { form } from './form'




$(window).on('load', function () {
  event()
  comments()
  timer()
  scroll();
  handleButton();
  useAnimate();
  form();

})
