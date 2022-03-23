$(function () {
    var templatebay = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton :false,
        timer: 2400
    })

    // success
    $('.sweetalert2success').click(function () {
        templatebay.fire({
            icon: 'success',
            title: ' Lorem ipsum dolor sit amet consectetur.'
        })
    })

    // warning
    $('.sweetalert2warning').click(function () {
        templatebay.fire({
            icon: 'warning',
            title: ' Lorem ipsum dolor sit amet consectetur.'
        })
    })

    // error
    $('.sweetalert2info').click(function () {
        templatebay.fire({
            icon: 'info',
            title: ' Lorem ipsum dolor sit amet consectetur.'
        })
    })

    // info
    $('.sweetalert2error').click(function () {
        templatebay.fire({
            icon: 'error',
            title: ' Lorem ipsum dolor sit amet consectetur.'
        })
    })
})
