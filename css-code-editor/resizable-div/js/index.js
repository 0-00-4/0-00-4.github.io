$(function(){
  var target = $(".resizable-thing");
  var nwHandle = $(".nw-handle");
  var neHandle = $(".ne-handle");
  var swHandle = $(".sw-handle");
  var seHandle = $(".se-handle");  
  
  function updateHandlePositions(){
    var position = target.position();
    var width = target.width();
    var height = target.height();
    
    nwHandle.css({
      cursor:'nw-resize',
      left: position.left - 5,
      top: position.top - 5
    });
    
    neHandle.css({ 
      cursor:'ne-resize',
      left: position.left + width - 5,
      top: position.top - 5
    });
    
    swHandle.css({
      cursor:'sw-resize',
      left: position.left - 5,
      top: position.top + height - 5
    });
    
    seHandle.css({
      cursor:'se-resize',
      left: position.left + width - 5, 
      top: position.top + height -5
    });
  }
  
  updateHandlePositions();
  
  var originalWidth, originalHeight, originalLeft, originalTop;
  
  seHandle.draggable({
    drag: function(event, ui){
      var position = target.position();
      target.css({
        width: (ui.position.left - position.left) + 5,
        height: (ui.position.top - position.top) + 5
      });
      updateHandlePositions();      
    }
  });

  swHandle.draggable({
    start: function(event,ui){
      originalWidth = target.width();
      originalLeft = target.position().left;
    },
    drag: function(event, ui){
      var position = target.position();
      target.css({
        left: ui.position.left + 5,
        height: (ui.position.top - position.top) + 5,
        width: originalWidth + (originalLeft - ui.position.left)
      });
      updateHandlePositions();
    }
  });
  
  neHandle.draggable({
    start: function(event, ui){       
      originalTop = target.position().top;
      originalHeight = target.height(); 
    },
    
    drag: function(event, ui){
      var position = target.position();
      var top = ui.position.top;
      var left = ui.position.left;
      target.css({
        top: top + 5,
        width: (left - position.left) + 5,
        height: (originalHeight + (originalTop - top)) -5
      }); 
      updateHandlePositions();
    }
  });
  
  nwHandle.draggable({
    start: function(event, ui){
      var position = target.position();
      originalWidth = target.width();
      originalHeight = target.height();
      originalLeft = position.left;
      originalTop = position.top;
    },
    drag: function(event, ui){
      var position = target.position();
      var top = ui.position.top;
      var left = ui.position.left;
      target.css({
        top: top + 5, 
        left: left + 5,
        width: originalWidth + (originalLeft - left) - 5,
        height: originalHeight + (originalTop - top) - 5
      });
      updateHandlePositions();
    }
  });
});