<?php
  // Only registering Keyman\Site\Common
  spl_autoload_register(function ($class_name) {
    if(preg_match('/^Keyman\\\\Site\\\\Common\\\\(.+)/', $class_name, $matches)) {
      // Fix namespace pathing for Linux
      $filename = str_replace(array('\\', '/'), DIRECTORY_SEPARATOR, $matches[1]);
      $success = @include(__DIR__ . "/../_common/{$filename}.php");
      if($success === FALSE) {
        debug_print_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS);
        die("Unable to find class $class_name");
      }
    }
  });
