class Request{
    method
    url
    data 
    dataType
    header
    preloadAttr 
    completeAttr
    retorno

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

    static async execute() {
        let retornar
        await $.ajax({
            headers: this.header,
            url: this.url, 
            type: this.method,
            data: this.data, 
            dataType: this.dataType,
            beforeSend: function() {            
                this.preloadAttr
            },    
            success: function (response) {                     
                retornar = response
            },
            complete: function() {
                this.completeAttr
            }           
        }) 
        return retornar
    }
}
