let sweet_request = (method, url, data, dataType = '') => {            
    let info_ajax = {
        headers: '', 
        preload: '', 
        complete: ''
    }

    let preload = (context) => {     
        info_ajax.preload = context
    }

    let complete = (context = '') => {
        info_ajax.complete = context
    }
    
    let headers = (object) => {
        info_ajax.headers = object
    }

    let execute = async () => {
        let info_data = {
            status: '', 
            msg: '', 
            data: null
        }

        await $.ajax({
            headers: info_ajax.headers,
            type: method,
            url: url,
            data: data,
            dataType: dataType,   
            // async: false, 
            beforeSend: function() {            
                info_ajax.preload
            },    
            success: function (response) {     
                info_data.status = 'success',            
                info_data.data = response
            },
            complete: function() {
                info_ajax.complete
            },
            error: function (request, status, error) {
                info_data.status = status 
                info_data.msg    = error
            }
        });
        
        return info_data
    }  

    return {
        preload,
        complete,
        execute, 
        headers        
    }
}