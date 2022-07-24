package com.sparc.quicknet.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * The BaseController class implements common functionality for all Controller
 * classes. The <code>@ExceptionHandler</code> methods provide a consistent
 * response when Exceptions are thrown from <code>@RequestMapping</code>
 * Controller methods.
 */
public interface BaseController {
    default <M> ResponseEntity<M> respond(M o) { return respond(o, HttpStatus.OK, HttpStatus.NOT_FOUND); }

    default <M> ResponseEntity<M> respond(M o, HttpStatus valid) { return respond(o, valid, HttpStatus.NOT_FOUND); }

    default <M> ResponseEntity<M> respond(M o, HttpStatus valid, HttpStatus invalid) {
        return new ResponseEntity<>(o, o == null ? invalid : valid);
    }

    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    class InternalServerErrorException extends Exception {
        private static final long serialVersionUID = 5265378448192317484L;
    }

    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    class NotFoundException extends Exception {
        private static final long serialVersionUID = 6034293538031578490L;
    }
}
