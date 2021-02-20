// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap'
require("stylesheets/application.scss")

import "@fortawesome/fontawesome-free/css/all"

$(document).on('turbolinks:load', function(){
   $(".alert-success").fadeTo(3000, 1000).slideUp(1000, function(){
    $("alert-success").slideUp(1000);
  });
  $(".alert-danger").fadeTo(3000, 1000).slideUp(1000, function(){
    $("alert-danger").slideUp(1000);
  });
    });