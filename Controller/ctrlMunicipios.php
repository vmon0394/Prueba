<?php

session_start();

//Esta variable recibe el valor enviado por la url, en el que se indica el caso del controlador que se va ejecutar.
$opcion = isset($_GET['opcion']) ? htmlspecialchars(stripcslashes($_GET['opcion'])) : '0';
include_once '../Model/libMunicipios.php';

$GLOBALS['objUsu'] = new libMunicipios();

switch ($opcion) {

    //El caso 1 del controlador recibe la información enviada del formulario, esta es almacenada en variables para luego ser enviada por método set 
    //a la librería y ejecutar el método llamado, en este caso el método registrar municipio, y retorna una respuesta de ejecución y 
    //el mensaje correspondiente a las respuesta.
    case '1': {

            $municipio = isset($_POST['municipio']) ? $_POST['municipio'] : "";
            $idDepartamento = isset($_POST['departamento']) ? $_POST['departamento'] : "";

            $GLOBALS['objUsu']->setMunicipio(strtoupper(strtr($municipio, "áéíóúñ", "ÁÉÍÓÚÑ")));
            $GLOBALS['objUsu']->setIdDepartamento($idDepartamento);

            $GLOBALS['objUsu']->registrarMunicipio();
            echo json_encode(array('res' => $GLOBALS['objUsu']->getRespuesta(), 'msg' => $GLOBALS['objUsu']->getMensaje()));
            break;
        }

    //El caso 2 del controlador recibe el id del registro a consultar enviando por método set a la librería y ejecuta el metodo llamado, 
    //en este caso el metodo consultar municipio, este retorna un vector con toda la información del registro.
    case '2': {

            $idMunicipio = isset($_POST['idMunicipio']) ? $_POST['idMunicipio'] : "";

            $GLOBALS['objUsu']->setIdMunicipio($idMunicipio);

            $GLOBALS['objUsu']->consultarMunicipio();
            echo json_encode(array('res' => $GLOBALS['objUsu']->getRespuesta(), 'msg' => $GLOBALS['objUsu']->getMensaje(), 'row' => $GLOBALS['objUsu']->getResult()));
            break;
        }

    //El caso 3 del controlador recibe la información enviada del formulario, esta es almacenada en variables para luego ser enviada por método set 
    //a la librería y ejecutar el método llamado, en este caso el método actualizar municipio, y retorna una respuesta de ejecución y el mensaje 
    //correspondiente a las respuesta.  
    case '3': {

            $idMunicipio = isset($_POST['idMunicipio']) ? $_POST['idMunicipio'] : "";
            $municipio = isset($_POST['municipio']) ? $_POST['municipio'] : "";
            $idDepartamento = isset($_POST['departamento']) ? $_POST['departamento'] : "";

            $GLOBALS['objUsu']->setIdMunicipio($idMunicipio);
            $GLOBALS['objUsu']->setMunicipio(strtoupper(strtr($municipio, "áéíóúñ", "ÁÉÍÓÚÑ")));
            $GLOBALS['objUsu']->setIdDepartamento($idDepartamento);

            $GLOBALS['objUsu']->actualizarMunicipio();
            echo json_encode(array('res' => $GLOBALS['objUsu']->getRespuesta(), 'msg' => $GLOBALS['objUsu']->getMensaje()));
            break;
        }
}