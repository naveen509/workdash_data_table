$(document).ready(function () {
     
    

    // table start-load data
    var html;
    function loaddata() {

        $.ajax({
            url: "controller/workdash_controller.php",
            type: "POST",
            cache: false,
            data:{
                mode:'view_data'
            },
            success: function (data) {
                
                console.log(data);
                var response = JSON.parse(data);
                console.log(response);


                var length = response.length;
                html += "<thead>";
                html += "<tr>";
                html += "<th align='center'>" + 'id' + "</th>";
                html += "<th align='center'>" + 'Name' + "</th>";  
                html += "<th align='center'>" + 'Position' + "</th>";
                html += "</tr>";
                html += "</thead>";
    
                html += "<tbody>";
                for (var i = 0; i < length; i++) {
                    var record = response[i];
                    // console.log(record);
    
    
                    html += "<tr>";
    
                    html += "<td  >" + record.id + "</td>";
                    html += "<td  >" + record.name + "</td>";
                    html += "<td  >" + record.position + "</td>";
                    
                    // id=$(this).attr('id');
                    // console.log(id);    
                    
                    html += "</tr>";
                }
    
    
                html += "</tbody>";
                $('#table_content').html(html);
                $('#table_content').DataTable();
    
    
            }
        });
    
        
        

    } // table -load function end
      
                          
    loaddata();

}); // document ready close
