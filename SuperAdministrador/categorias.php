<?php
session_start();
if (!isset($_SESSION["usuario"]) || $_SESSION["perfil"] != "SuperAdministrador") {
    echo '<meta http-equiv="refresh" content="0;url=index.php" />';
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="shorcut icon type=" href="../favicon.png"/>
        <title>Fundación | Super Admin</title>

        <!-- Referencias js,css -->
        <?php include_once '../includes/head.php'; ?>
    </head>
    <body>

        <div class="container-fluid content-wrapper">
            <br>
            <br>
            <!--.Logo Bar & Login-->
            <div class="row-fluid">
                <div class="logobar">
                    <div class="logo pull-left">
                        <a href="#" title="Sistema de Gestión | Fundación Conconcreto"><img src="../img/fundacion_logo.png" style="width: 290px;"></a>              
                    </div>
                    <br>
                    <h1 align="center">Registro Categorías</h1>
                </div>
            </div>
            <br>
            <br>
            <!--.Navigation Bar -->
            <?php include_once 'menu.php'; ?>
            <!--/.Navigation Bar-->  

            <!-- CONTENIDO PRINCIPAL -->
            <div class="row-fluid">    
                <div class="breadcrumb">
                    <div class="tab-content"> 
                        <form  method="POST" class="form-horizontal" id="frmCategorias">     
                            <div class="tab-pane">
                                <label class="alert alert-info">Los campos marcados con * son obligatorios </label>
                                <br> 
                                <input id="idCategoria"  name="idCategoria" type="hidden">

                                <div class="control-group">
                                    <div class="controls">
                                        <div class="control-group">
                                            <label class="control-label" for="textinput">Categoría *</label>
                                            <div class="controls input-group">
                                                <input id="categoria"  name="categoria" type="text" placeholder="Ingrese el Nombre del Proyecto" class="input-xxlarge">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <center>
                                    <div class="control-group">
                                        <button type="button" class="btn btn-primary" id="return" data-dismiss="modal">Nuevo</button> &nbsp;&nbsp;
                                        <button type="button" class="btn btn-primary" id="save" data-dismiss="modal">Guardar</button>  
                                        <button type="button" class="btn btn-primary" id="modi" data-dismiss="modal" style="display: none">Modificar</button>
                                        <button type="button" class="btn btn-primary" id="update" data-dismiss="modal" style="display: none">Actualizar</button>
                                    </div>
                                </center>

                                <div class="control-group">                                
                                    <button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#demo">Listado de Categorías &nbsp;&nbsp;</button>
                                    <!-- tabs left -->
                                    <div id="demo" class="collapse in" style="border: solid 1px; font: normal 12px 'Arial','Verdana', 'serif', 'sans-serif', 'monospace' !important;">

                                        <div class="tabbable tabs-left">
                                            <ul class="nav nav-tabs">
                                                <li class="active"><a href="#a" data-toggle="tab" class="">Categorías</a></li>
                                                <li><a href="#b" data-toggle="tab" class="">Categorías Eliminadas</a></li>
                                            </ul>

                                            <div class="tab-content">

                                                <div class="tab-pane active" id="a">

                                                    <br>
                                                    <h4>Categorías Existentes</h4>
                                                    <br>
                                                    <br>
                                                    <div class="table-responsive">                            
                                                        <table class="table table-striped table-hover table-bordered table-condensed" id="tblRol">
                                                            <thead>
                                                                <tr>
                                                                    <th class="text-center" style="padding-right: 10px; color: #000; width:20px">N°</th>                                        
                                                                    <th class="text-center" style="padding-right: 10px; color: #000; width:650px">Categorías</th>
                                                                    <th class="text-center" style="padding-right: 10px; color: #000; width:60px">Consultar</th>
                                                                    <th class="text-center" style="padding-right: 10px; color: #000; width:50px">Eliminar</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody  id="index_ajax">

                                                            </tbody>
                                                        </table>
                                                    </div>

                                                </div>

                                                <div class="tab-pane" id="b">

                                                    <br>
                                                    <h4>Categorías Eliminadas</h4>
                                                    <br>
                                                    <br>
                                                    <div class="table-responsive">                            
                                                        <table class="table table-striped table-hover table-bordered table-condensed" id="tblRol2">
                                                            <thead>
                                                                <tr>
                                                                    <th class="text-center" style="padding-right: 10px; color: #000; width:20px">N°</th>                                        
                                                                    <th class="text-center" style="padding-right: 10px; color: #000; width:770px">Categorías</th>
                                                                    <th class="text-center" style="padding-right: 10px; color: #000; width:50px">Habilitar</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody  id="index_ajax">

                                                            </tbody>
                                                        </table>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>

                <!--.Footer-->
                
                
            </div>       
        </div>

        <!-- Referencias js -->
        <?php include_once '../includes/endBody.php'; ?>
        <script src="../js/funcionesCategorias.js" type="text/javascript"></script>

        <!-- Control de recargas de las tablas, siempre debe ir de ultima en las referencias js -->
        <script src="../js/fnSetFilteringDelay.js" type="text/javascript"></script>

        <input id="PUBLIC_PATH" name="PUBLIC_PATH" type="hidden" value="/">
        <div id="LoadingImage" class="ajax-loader" style="display:none;"></div>

    </body>
</html>

<div class="modal fade" id="exampleconfirmacion" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="z-index: 8000;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="exampleModalLabel">New message</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <p id="modal-message">New message</p>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Ok</button>
            </div>
        </div>
    </div>
</div>