<?php

if (empty_param('call_api')) {
  err_die("You must inform the api function call name.");
}

call_user_func('am_api_' . param('call_api'));
