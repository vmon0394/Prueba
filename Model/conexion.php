<?php

//Este archivo es la clase conexión a la base de datos mysql.

class Conexion {

    private $host;
    private $user;
    private $password;
    private $dbname;
    private $mensaje;
    private $link = null; //aqui se almacena la conexion con la base de datos.

    public function __construct() {

        $this->host = "localhost";
        $this->user = "root";
        $this->password = "";
        $this->dbname = "db_sistema_conconcreto";
    }

    //Metodo para conectarse a la base de datos MYSQL
    public function conectar() {

        try {
            $this->link = new mysqli($this->host, $this->user, $this->password, $this->dbname);
            $this->link->set_charset('utf8');
        } catch (Exception $e) {
            $this->mensaje = "Imposible establecer la conexion: " . $this->link->error;
            return false;
        }
        return $this->link;
    }

    public function desconectar() {
        $this->link->close();
    }

    public function getError() {
        return $this->mensaje;
    }

}

?>