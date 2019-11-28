// Write your JavaScript code.
var maximize=false;

//Agregado de SubMenus
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
    }
    var $subMenu = $(this).next('.dropdown-menu');
    $subMenu.toggleClass('show');
  
  
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass('show');
    });
  
    return false;
  });

  //Muestra los titulos y cambios los nombre de los deportes
  function GetLegue(deporte, subDeporte, liga)
  {
    var Deporte=$('.deportTitle');
    var SubDeporte=$('.subDeportTitle');
    var Liga=$('.ligaTitle');
    $(".detailPlay").remove();
    $("#listPlays").addClass("col-12");
    $("#listPlays").removeClass("col-6");
    $("#listPlays").show('1000');
    $('.ocultar').hide('1000');
    Deporte.html(deporte);
    SubDeporte.html(subDeporte);
    Liga.html(liga);
    $('.ocultar').show('1000');
  }

  //Maximiza la ventana del detalle
  function DetailsMaximize()
  {
    var DetailPlay=$(".detailPlay");
    if(maximize===false)
    {
      $("#listPlays").hide('1000');  
      DetailPlay.addClass("col-12");
      DetailPlay.removeClass("col-6");
      maximize=true;
    }
    else
    {
      $("#listPlays").show('1000');
      DetailPlay.addClass("col-6");
      DetailPlay.removeClass("col-12");
      maximize=false;
    }
  };

  //Divide la ventana en 2 y muestra el detalle
  function GetDetailsPlay()
  {
    var main=$("#main");
    var ListPlays=$("#listPlays");
    ListPlays.addClass("col-6");
    ListPlays.removeClass("col-12");
    $('.detailPlay').remove();
    main.append( "<div class='col-6 detailPlay'><div class='card'><div class='card-header bg-primary'><a class='close' onclick='DetailsMaximize();'><small><i class='fas fa-window-maximize'></i></small></a><h6>Detalles</h6></div></div><br /><div class=card><div id='detailPlay' class='card-body'><img src='wwwroot/img/Prueba.png' style='heigh:auto;max-width:100%;' ></div></div></div>");         
  }

