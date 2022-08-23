$(document).ready(function(){
    $('.toggle__search').each(function () {
        $(this).on('keyup', function () {
            let value = $(this).val().toLowerCase()

            $(this).next().find($('.toggle__check-item--label')).filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        })
    })
});