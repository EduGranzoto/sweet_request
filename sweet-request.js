class sweet_request{
    method
    url
    data 
    dataType
    header
    preloadAttr 
    completeAttr

    static informacoes_gerais(method, url, data, dataType = '') {
        this.method = method
        this.url    = url
        this.data   = data
        this.dataType = dataType
    }
    
    static headers(header) {
        this.header = header
    } 

    static preload(preload) {
        this.preloadAttr = preload
    } 

    static complete(complete) {
        this.completeAttr = complete
    } 

    static execute() {
        $.ajax({
            headers: this.header,
            url: this.url, 
            data: this.data, 
            dataType: this.dataType,
            beforeSend: function() {            
                this.preloadAttr
            },    
            success: function (response) {     
                return response
            },
            complete: function() {
                this.completeAttr
            }           
        })
    }
}
