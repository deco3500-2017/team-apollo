<?php
/**
 * Send back a meaninful error to the client.
 *
 * @param int $code The error code.
 * @param string $name The name of the error.
 * @param string $message A meaningful message for debugging purposes.
 * @return void
 */
function returnError($code, $name, $message) {
    $return = array("success"=> 0,
    "code"=>$code,
    "error_name"=>$name,
    "error_message"=>$message);

    echo(json_encode($return));
    exit();
}

/**
 * Send back a simple success message to the client.
 *
 * @param int $code The success code.
 * @param string $name The name of the successful operation.
 * @param string $message A meaningful message for debugging purposes.
 * @return void
 */
function returnSimpleSuccess($code, $name, $message) {
    $return = array("success"=> 1,
    "code"=>$code,
    "success_name"=>$name,
    "success_message"=>$message);

    echo(json_encode($return));
    exit();
}

?>
