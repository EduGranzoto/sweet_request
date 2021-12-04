let sweet_request = (method, url, data, preload = '', complete = '', dataType = '') => {    
    let info_data = {
        status: '', 
        msg: '', 
        data: null
    }

    $.ajax({
        type: method,
        url: url,
        data: data,
        dataType: dataType,   
        async: false,
        beforeSend: function() {
            preload
        },    
        success: function (response) {
            info_data.status = 'success',            
            info_data.data = response
        },
        complete: function() {

        },
        error: function (request, status, error) {
            info_data.status = status 
            info_data.msg    = error
        }
    });

    return info_data
}