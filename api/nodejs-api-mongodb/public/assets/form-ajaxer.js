
$(document).ready(function(){
    $('form').on('submit', function(){
        
        var item = $('form input');
        var todo = { item: item.val() };

        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function(data){
                // reload 
                location.reload();                
            },
            error: function(e){
                    //console.log(e);
            }

        });

        return false;
    });
    
    $('li').on('click',function(){
        console.log('you clicked the li ');
        var item = $(this).text().replace(/ /g,"-");
        $.ajax({
            type: 'DELETE',
            url : '/todo/' + item,
            success: function(data){
                
                location.reload();
            }
        });
    });
});
 