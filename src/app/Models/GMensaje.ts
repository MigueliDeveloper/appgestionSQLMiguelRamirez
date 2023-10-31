export class GMensaje{
	public id?: string
	public nombre: string
	public email: string
	public asunto: string
	public mensaje: string
	constructor(nombre: string, email: string, telefono: string, asunto: string, mensaje: string){
        this.nombre = nombre;
        this.email = email;
        this.asunto = asunto;
        this.mensaje = mensaje;
    }
}