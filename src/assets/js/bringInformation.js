function BringInformation(){

    $.ajax({
        type: "POST",
        url: "../../app/controller/bringInfo.php",
        data: {
            option: 0,
        },
        async: true,
        success: function (data) {

            let info = $.parseJSON(data);

            $('#tableClient').html('');

            let divs = '';

            for(let i = 0; i < info.length; i++){
                
                divs += `
                    <tr>
                        <td width="15">${info[i]['NAME']}</td>
                        <td width="15">${info[i]['LAST_NAME']}</td>
                        <td width="15">${info[i]['IDENTITY']}</td>
                        <td width="45">${info[i]['ADDRESS']}</td>
                        <td width="10">
                        <div class="row justify-content-center">
                            <div class="col-xl-3 col-md-3 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box w-100">
                                <div class="icon"><button class="btnUpdate" onclick="Update(${info[i]['ID_CLIENT']})"><i class="bx bx-edit-alt"></i></button></div>
                            </div>
                            </div>
    
                            <div class="col-xl-3 col-md-3 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box w-100">
                                <div class="icon"><button class="btnDelete" onclick="Delete(${info[i]['ID_CLIENT']})"><i class="bx bx-trash"></i></button></div>
                            </div>
                            </div>
                        </div>
                        </td>
                    </tr>
                    `;
                }
            
            $('#tableClient').html(divs);
        },
        error: function (error) {
            Console.log(`Error: ${error}`);
        }
    });
}

function BringInformationClientMeter(){

    $.ajax({
        type: "POST",
        url: "../../app/controller/bringInfo.php",
        data: {
            option: 2,
        },
        async: true,
        success: function (data) {

            let info = $.parseJSON(data);

            console.log(info);

            $('#tableClient').html('');

            let divs = '';

            for(let i = 0; i < info.length; i++){
                
                divs += `
                    <tr>
                        <td width="15">${info[i]['NAME']}</td>
                        <td width="15">${info[i]['LAST_NAME']}</td>
                        <td width="15">${info[i]['IDENTITY']}</td>
                        <td width="45">${info[i]['ADDRESS']}</td>
                        <td width="10">
                        <div class="row justify-content-center">
                    `; 
                    
                    if(info[i]['ID_METER'] == null){
                        divs += `
                                <div class="col-xl-3 col-md-3 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
                                <div class="icon-box w-100">
                                    <div class="icon"><button class="btnCreate" onclick="Create(${info[i]['ID_CLIENT']})"><i class="bx bx-list-minus"></i></button></div>
                                </div>
                                </div>
                        `;
                    }else{
                        divs += `
                            <div class="col-xl-3 col-md-3 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box w-100">
                                <div class="icon"><button class="btnUpdate" onclick="Update(${info[i]['ID_CLIENT']})"><i class="bx bx-edit-alt"></i></button></div>
                            </div>
                            </div>
                        `;
                    }

                    divs += `
    
                            <div class="col-xl-3 col-md-3 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box w-100">
                                <div class="icon"><button class="btnDelete" onclick="Delete(${info[i]['ID_CLIENT']})"><i class="bx bx-trash"></i></button></div>
                            </div>
                            </div>
                        </div>
                        </td>
                    </tr>
                    `;
                }
            
            $('#tableClient').html(divs);
        },
        error: function (error) {
            Console.log(`Error: ${error}`);
        }
    });
}

function BringInformationUser(){

    $.ajax({
        type: "POST",
        url: "../../app/controller/bringInfo.php",
        data: {
            option: 5,
        },
        async: true,
        success: function (data) {

            let info = $.parseJSON(data);

            console.log(info);

            $('#tableClient').html('');

            let divs = '';

            for(let i = 0; i < info.length; i++){

                let rol = '';

                if(info[i]['ROL'] == 'annotator'){
                    rol = 'Anotador';
                }else if(info[i]['ROL'] == 'root'){
                    rol = 'Super usuario';
                }else{
                    rol = 'Administrativo';
                }
                
                divs += `
                    <tr>
                        <td width="45">${info[i]['USER']}</td>
                        <td width="45">${rol}</td>
                        <td width="10">
                        <div class="row justify-content-center">                    
                            <div class="col-xl-3 col-md-3 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box w-100">
                                <div class="icon"><button class="btnUpdate" onclick="Update(${info[i]['ID_USER']})"><i class="bx bx-edit-alt"></i></button></div>
                            </div>
                            </div>
                    
                            <div class="col-xl-3 col-md-3 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="100">
                            <div class="icon-box w-100">
                                <div class="icon"><button class="btnDelete" onclick="Delete(${info[i]['ID_USER']})"><i class="bx bx-trash"></i></button></div>
                            </div>
                            </div>
                        </div>
                        </td>
                    </tr>
                    `;
                }
            
            $('#tableClient').html(divs);
        },
        error: function (error) {
            Console.log(`Error: ${error}`);
        }
    });
}