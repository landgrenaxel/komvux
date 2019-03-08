
$(document).ready(() =>{
    $('#carousel').hide();
    $('#cards').hide();
    $('#homeSortiment').show();
});




function showPage(pageId) {
    $('.row').hide();
    $(pageId).show();
}

    
    window.addEventListener('hashchange', (() => {
        showPage(location.hash);
    }));
    
    
    $("#modalLogin").click(function(event) {
    
        
        var form = $("#formLog")
    
        if (form[0].checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        
        form.addClass('was-validated');
      });