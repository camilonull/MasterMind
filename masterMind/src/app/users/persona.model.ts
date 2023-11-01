export class Persona {
    constructor(
        public nombre_usuario: string,
        public apellido_usuario: string,
        public documento_usuario: number,
        public correo_usuario: string,
        public tipo_documento: string,
        public tipo_usuario: string,
        public credenciales: Credenciales,
    ) { }
}
export class Credenciales {
    constructor( public contrasena_usuario: string) { }
}