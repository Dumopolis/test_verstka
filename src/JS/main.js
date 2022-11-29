import $ from 'jquery';
import { scroll, handleButton, useAnimate } from './scrollify'
import { timer } from './timer'
import { comments } from './commentSlick'
import { event } from './event'
import { form } from './form'
import { videoLoader } from './videoLoader'

$(window).on('load', function () {
  event()
  comments()
  timer()
  scroll();
  handleButton();
  useAnimate();
  form();
  videoLoader();
})
$(window).resize(videoLoader) 