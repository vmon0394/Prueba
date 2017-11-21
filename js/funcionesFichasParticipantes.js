$(document).ready(function () {

    //llamado del las funciones para llenar las tablas
    tabla();
    tabla2();

    //evento del boton consultar el cual oculta la lista de fichas del semillero y muestra la información de la ficha seleccionado
    $('#tblRol').on('click', 'a.consult', function () {

        $("#LoadingImage").show();
        var id = $(this).prop('title');
        $.ajax({
            type: "POST",
            url: "../Controller/ctrlFichaSocioFamiliar.php?opcion=3",
            data: {idFicha: id},
            error: function (jqXHR, textStatus, errorThrown) {
                //*Ocurrió un eror en la petición ajax
                $("#LoadingImage").hide();
                console.log(textStatus + "\n" + errorThrown);
            },
            success: function (result) {
                var data = eval('(' + result + ')');

                if (data.res === 'fail') {

                    $("#LoadingImage").hide();
                    var modal = $('#exampleconfirmacion');
                    modal.find('.modal-title').text("Confirmación");
                    modal.find('#modal-message').html(data.msg);
                    $('#exampleconfirmacion').modal('show');

                } else if (data.res === 'all') {

                    $("#LoadingImage").hide();
                    if (data.row.TipoRegistro < 10) {

                        $("#semilleroN").css({"border": "", "box-shadow": ""});
                        $("#nombres").css({"border": "", "box-shadow": ""});
                        $("#apellidos").css({"border": "", "box-shadow": ""});
                        $("#sexo-1").css({"border": "", "box-shadow": ""});
                        $("#sexo-2").css({"border": "", "box-shadow": ""});
                        $("#departamentoNacimiento").css({"border": "", "box-shadow": ""});
                        $("#ciudadNacimiento").css({"border": "", "box-shadow": ""});
                        $("#fechaNacimiento").css({"border": "", "box-shadow": ""});
                        $("#edad").css({"border": "", "box-shadow": ""});
                        $("#tipoDocumento").css({"border": "", "box-shadow": ""});
                        $("#documento").css({"border": "", "box-shadow": ""});
                        $("#rh").css({"border": "", "box-shadow": ""});
                        $("#tipoSeguridad").css({"border": "", "box-shadow": ""});
                        $("#telefonoN").css({"border": "", "box-shadow": ""});
                        $("#celular").css({"border": "", "box-shadow": ""});
                        $("#direccionN").css({"border": "", "box-shadow": ""});
                        $("#barrioOvereda").css({"border": "", "box-shadow": ""});
                        $("#email").css({"border": "", "box-shadow": ""});
                        $("#departamentoResidencia").css({"border": "", "box-shadow": ""});
                        $("#ciudadResidencia").css({"border": "", "box-shadow": ""});
                        $("#institucion").css({"border": "", "box-shadow": ""});
                        $("#grado").css({"border": "", "box-shadow": ""});
                        $("#repitencia").css({"border": "", "box-shadow": ""});
                        $("#anoIngreso").css({"border": "", "box-shadow": ""});
                        $("#anoPermanencia").css({"border": "", "box-shadow": ""});
                        $("#nombresPadre").css({"border": "", "box-shadow": ""});
                        $("#telefonoPadre").css({"border": "", "box-shadow": ""});
                        $("#celularPadre").css({"border": "", "box-shadow": ""});
                        $("#celularCuidador").css({"border": "", "box-shadow": ""});
                        $("#tipologia").css({"border": "", "box-shadow": ""});
                        $("#numeroMiembros").css({"border": "", "box-shadow": ""});
                        $("#etnia").css({"border": "", "box-shadow": ""});
                        $("#desplazado").css({"border": "", "box-shadow": ""});
                        $("#discapacidad").css({"border": "", "box-shadow": ""});
                        $("#familiarEmpresa").css({"border": "", "box-shadow": ""});

                        $("#semilleroN").attr('disabled', 'disabled');
                        $("#nombres").attr('disabled', 'disabled');
                        $("#apellidos").attr('disabled', 'disabled');
                        $("#sexo-1").attr('disabled', 'disabled');
                        $("#sexo-2").attr('disabled', 'disabled');
                        $("#departamentoNacimiento").attr('disabled', 'disabled');
                        $("#ciudadNacimiento").attr('disabled', 'disabled');
                        $("#fechaNacimiento").attr('disabled', 'disabled');
                        $("#edad").attr('disabled', 'disabled');
                        $("#tipoDocumento").attr('disabled', 'disabled');
                        $("#documento").attr('disabled', 'disabled');
                        $("#rh").attr('disabled', 'disabled');
                        $("#tipoSeguridad").attr('disabled', 'disabled');
                        $("#entidad").attr('disabled', 'disabled');
                        $("#telefonoN").attr('disabled', 'disabled');
                        $("#ocupacion").attr('disabled', 'disabled');
                        $("#celular").attr('disabled', 'disabled');
                        $("#direccionN").attr('disabled', 'disabled');
                        $("#barrioOvereda").attr('disabled', 'disabled');
                        $("#barrioN").attr('disabled', 'disabled');
                        $("#email").attr('disabled', 'disabled');
                        $("#departamentoResidencia").attr('disabled', 'disabled');
                        $("#ciudadResidencia").attr('disabled', 'disabled');
                        $("#institucion").attr('disabled', 'disabled');
                        $("#grado").attr('disabled', 'disabled');
                        $("#repitencia").attr('disabled', 'disabled');
                        $("#cuantos").attr('disabled', 'disabled');
                        $("#cualesRepite").attr('disabled', 'disabled');
                        $("#anoIngreso").attr('disabled', 'disabled');
                        $("#anoPermanencia").attr('disabled', 'disabled');
                        $("#nombresPadre").attr('disabled', 'disabled');
                        $("#telefonoPadre").attr('disabled', 'disabled');
                        $("#celularPadre").attr('disabled', 'disabled');
                        $("#nombresCuidador").attr('disabled', 'disabled');
                        $("#parentezcoCuidador").attr('disabled', 'disabled');
                        $("#telefonoCuidador").attr('disabled', 'disabled');
                        $("#celularCuidador").attr('disabled', 'disabled');
                        $("#tipologia").attr('disabled', 'disabled');
                        $("#numeroMiembros").attr('disabled', 'disabled');
                        $("#desplazado").attr('disabled', 'disabled');
                        $("#registro").attr('disabled', 'disabled');                        
                        $("#victima").attr('disabled', 'disabled');
                        $("#registroVictima").attr('disabled', 'disabled');
                        $("#discapacidad").attr('disabled', 'disabled');
                        $("#observacionDiscapa").attr('disabled', 'disabled');
                        $("#etnia").attr('disabled', 'disabled');
                        $("#empleoFormal").attr('disabled', 'disabled');
                        $("#empleoInformal").attr('disabled', 'disabled');
                        $("#familiarEmpresa").attr('disabled', 'disabled');
                        $("#compania").attr('disabled', 'disabled');
                        $("#tipoVinculacion").attr('disabled', 'disabled');
                        $("#nombresFamiliarEmpresa").attr('disabled', 'disabled');                        
                        $("#participaOtroSemillero").attr('disabled', 'disabled');
                        $("#otroSemilleros").attr('disabled', 'disabled');
                        $("#participaServicios").attr('disabled', 'disabled');
                        $("#queSemilleros").attr('disabled', 'disabled');
                        $("#archivoDocumento").attr('disabled', 'disabled');
                        $("#archivoFoto").attr('disabled', 'disabled');
                        $("#archivoVoluntad").attr('disabled', 'disabled');

                        //idFicha del formulario observaciones
                        $("#idFichaObserva").val(data.row.IdFicha);

                        $("#idFichaNinos").val(data.row.IdFicha);
                        $("#semilleroN").val(data.row.IdSemillero);
                        $("#nombres").val(data.row.Nombres);
                        $("#apellidos").val(data.row.Apellidos);

                        if (data.row.Sexo === "MASCULINO") {
                            $("#sexo-1").prop('checked', 'checked');
                        } else if (data.row.Sexo === "FEMENINO") {
                            $("#sexo-2").prop('checked', 'checked');
                        }

                        $("#departamentoNacimiento").val(data.row.IdDepartamentoNacimiento);
                        Carga2('../Controller/ctrlCombos.php?opcion=1&depar=' + data.row.IdDepartamentoNacimiento, 'ciudadNacimiento', data);

                        $("#fechaNacimiento").val(data.row.FechaNacimiento);
                        $("#edad").val(data.row.Edad);
                        $("#tipoDocumento").val(data.row.TipoDocumento);
                        $("#documento").val(data.row.Documento);
                        $("#rh").val(data.row.RH);
                        $("#tipoSeguridad").val(data.row.TipoDeSeguridad);
                        $("#entidad").val(data.row.Eps_sisben);
                        $("#telefonoN").val(data.row.Telefono);
                        $("#ocupacion").val(data.row.Ocupacion);
                        $("#celular").val(data.row.Celular);
                        $("#direccionN").val(data.row.Direccion);
                        $("#barrioN").val(data.row.Barrio_vereda);
                        $("#barrioOvereda").val(data.row.BarrioOvereda);
                        $("#email").val(data.row.Email);
                        $("#departamentoResidencia").val(data.row.IdDepartamentoResidencia);
                        Carga2('../Controller/ctrlCombos.php?opcion=1&depar=' + data.row.IdDepartamentoResidencia, 'ciudadResidencia', data);

                        $("#institucion").val(data.row.Institucion);
                        $("#grado").val(data.row.Grado);
                        $("#repitencia").val(data.row.Repitencia);
                        $("#cuantos").val(data.row.Cuantos);
                        $("#cualesRepite").val(data.row.Cuales);
                        $("#anoIngreso").val(data.row.AnoDeIngreso);
                        $("#anoPermanencia").val(data.row.AnosDePermanencia);
                        $("#nombresPadre").val(data.row.NombreMadre_Padre);
                        $("#telefonoPadre").val(data.row.TelefonoMadre_Padre);
                        $("#celularPadre").val(data.row.CelularMadre_padre);
                        $("#nombresCuidador").val(data.row.NombreCuidador);
                        $("#parentezcoCuidador").val(data.row.ParentezcoCuidador);
                        $("#telefonoCuidador").val(data.row.TelefonoCuidador);
                        $("#celularCuidador").val(data.row.CelularCuidador);
                        $("#tipologia").val(data.row.TipologiaFamiliar);
                        $("#numeroMiembros").val(data.row.MiembrosFamilia);
                        $("#desplazado").val(data.row.Desplazado);
                        $("#registro").val(data.row.Registro);    
                        $("#victima").val(data.row.Victima);
                        $("#registroVictima").val(data.row.Registro_victima);
                        $("#discapacidad").val(data.row.Discapacidad);
                        $("#observacionDiscapa").val(data.row.ObservacionDiscapacidad);
                        $("#etnia").val(data.row.Etnia);
                        $("#empleoFormal").val(data.row.PersonasEmpleoFormal);
                        $("#empleoInformal").val(data.row.PersonasEmpleoInformal);
                        $("#familiarEmpresa").val(data.row.FamiliaresEmpresa);
                        $("#compania").val(data.row.Compania);
                        $("#tipoVinculacion").val(data.row.TipoVinculacion);
                        $("#nombresFamiliarEmpresa").val(data.row.NombreParentezco);                        
                        $("#participaOtroSemillero").val(data.row.Participa_otro_semillero);
                        $("#otroSemilleros").val(data.row.Otros_semilleros);
                        $("#participaServicios").val(data.row.Participa_servicios);
                        $("#queSemilleros").val(data.row.Que_servicios);

                        $("#p1").addClass('btn-success');
                        $("#p2").removeClass('btn-success');
                        $("#p3").removeClass('btn-success');
                        $("#p4").removeClass('btn-success');
                        $("#p5").removeClass('btn-success');
                        $("#p6").removeClass('btn-success');
                        $("#paso1").show();
                        $("#paso2").hide();
                        $("#paso3").hide();
                        $("#paso4").hide();
                        $("#paso5").hide();
                        $("#paso6").hide();

                        $("#listadoFichas").hide();
                        $("#fichaSocioFamiliarNinos").show();
                        $("#continue1").hide();
                        $("#continue2").hide();
                        $("#continue3").hide();
                        $("#updateNino").hide();
                        $("#save").hide();
                        $("#limpiar").hide();
                        $("#modiNino").show();
                        $("#returnFichas").show();
                        $("#enviarDocumento").hide();
                        $("#enviarFotoN").hide();
                        $("#enviarVoluntad").hide();

                        var oTable = $('#tblRolArchivosNinos').dataTable();
                        oTable.fnDestroy();
                        tablaNinos(data.row.IdFicha);

                        var oTable = $('#tblRolObservacion').dataTable();
                        oTable.fnDestroy();
                        tablaObservacionesNinos(data.row.IdFicha);

                    } else if (data.row.TipoRegistro >= 10 && data.row.TipoRegistro < 20) {

                        $("#semilleroAdulto").css({"border": "", "box-shadow": ""});
                        $("#nombresAdulto").css({"border": "", "box-shadow": ""});
                        $("#apellidosAdulto").css({"border": "", "box-shadow": ""});
                        $("#sexoAdulto-1").css({"border": "", "box-shadow": ""});
                        $("#sexoAdulto-2").css({"border": "", "box-shadow": ""});
                        $("#departamentoNacimientoAdulto").css({"border": "", "box-shadow": ""});
                        $("#ciudadNacimientoAdulto").css({"border": "", "box-shadow": ""});
                        $("#fechaNacimientoAdulto").css({"border": "", "box-shadow": ""});
                        $("#edadAdulto").css({"border": "", "box-shadow": ""});
                        $("#tipoDocumentoAdulto").css({"border": "", "box-shadow": ""});
                        $("#documentoAdulto").css({"border": "", "box-shadow": ""});
                        $("#rhAdulto").css({"border": "", "box-shadow": ""});
                        $("#tipoSeguridadAdulto").css({"border": "", "box-shadow": ""});
                        $("#telefonoAdulto").css({"border": "", "box-shadow": ""});
                        $("#celularAdulto").css({"border": "", "box-shadow": ""});
                        $("#barrioOveredaAdulto").css({"border": "", "box-shadow": ""});
                        $("#celularAdulto").css({"border": "", "box-shadow": ""});
                        $("#emailAdulto").css({"border": "", "box-shadow": ""});
                        $("#departamentoResidenciaAdulto").css({"border": "", "box-shadow": ""});
                        $("#ciudadResidenciaAdulto").css({"border": "", "box-shadow": ""});
                        $("#nivelEscolaridad").css({"border": "", "box-shadow": ""});
                        $("#estadoEscolaridad").css({"border": "", "box-shadow": ""});
                        $("#anoIngresoAdulto").css({"border": "", "box-shadow": ""});
                        $("#anoPermanenciaAdulto").css({"border": "", "box-shadow": ""});
                        $("#tipologiaAdulto").css({"border": "", "box-shadow": ""});
                        $("#desplazadoAdulto").css({"border": "", "box-shadow": ""});
                        $("#discapacidadAdulto").css({"border": "", "box-shadow": ""});
                        $("#etniaAdulto").css({"border": "", "box-shadow": ""});
                        $("#numeroMiembrosAdulto").css({"border": "", "box-shadow": ""});
                        $("#familiarEmpresaAdulto").css({"border": "", "box-shadow": ""});

                        $("#semilleroAdulto").attr('disabled', 'disabled');
                        $("#nombresAdulto").attr('disabled', 'disabled');
                        $("#apellidosAdulto").attr('disabled', 'disabled');
                        $("#sexoAdulto-1").attr('disabled', 'disabled');
                        $("#sexoAdulto-2").attr('disabled', 'disabled');
                        $("#departamentoNacimientoAdulto").attr('disabled', 'disabled');
                        $("#ciudadNacimientoAdulto").attr('disabled', 'disabled');
                        $("#fechaNacimientoAdulto").attr('disabled', 'disabled');
                        $("#edadAdulto").attr('disabled', 'disabled');
                        $("#tipoDocumentoAdulto").attr('disabled', 'disabled');
                        $("#documentoAdulto").attr('disabled', 'disabled');
                        $("#rhAdulto").attr('disabled', 'disabled');
                        $("#tipoSeguridadAdulto").attr('disabled', 'disabled');
                        $("#entidadAdulto").attr('disabled', 'disabled');
                        $("#telefonoAdulto").attr('disabled', 'disabled');
                        $("#ocupacionAdulto").attr('disabled', 'disabled');
                        $("#celularAdulto").attr('disabled', 'disabled');
                        $("#direccionAdulto").attr('disabled', 'disabled');
                        $("#barrioOveredaAdulto").attr('disabled', 'disabled');
                        $("#barrioAdulto").attr('disabled', 'disabled');
                        $("#emailAdulto").attr('disabled', 'disabled');
                        $("#departamentoResidenciaAdulto").attr('disabled', 'disabled');
                        $("#ciudadResidenciaAdulto").attr('disabled', 'disabled');
                        $("#nivelEscolaridad").attr('disabled', 'disabled');
                        $("#estadoEscolaridad").attr('disabled', 'disabled');
                        $("#areaProfesionalizacion").attr('disabled', 'disabled');
                        $("#anoIngresoAdulto").attr('disabled', 'disabled');
                        $("#anoPermanenciaAdulto").attr('disabled', 'disabled');
                        $("#nombresNino").attr('disabled', 'disabled');
                        $("#parentezcoNino").attr('disabled', 'disabled');
                        $("#programaNino").attr('disabled', 'disabled');
                        $("#tipologiaAdulto").attr('disabled', 'disabled');
                        $("#discapacidadAdulto").attr('disabled', 'disabled');
                        $("#observacionDiscapaAdulto").attr('disabled', 'disabled');
                        $("#desplazadoAdulto").attr('disabled', 'disabled');
                        $("#registroAdulto").attr('disabled', 'disabled');              
                        $("#victimaAdulto").attr('disabled', 'disabled');
                        $("#registroVictimaAdulto").attr('disabled', 'disabled');
                        $("#etniaAdulto").attr('disabled', 'disabled');
                        $("#numeroMiembrosAdulto").attr('disabled', 'disabled');
                        $("#ocupacionMiembrosAdulto").attr('disabled', 'disabled');
                        $("#empleoFormalAdulto").attr('disabled', 'disabled');
                        $("#empleoInformalAdulto").attr('disabled', 'disabled');
                        $("#familiarEmpresaAdulto").attr('disabled', 'disabled');
                        $("#companiaAdulto").attr('disabled', 'disabled');
                        $("#tipoVinculacionAdulto").attr('disabled', 'disabled');
                        $("#nombresFamiliarEmpresaAdulto").attr('disabled', 'disabled');
                        $("#archivoDocumentoAdultos").attr('disabled', 'disabled');
                        $("#archivoFotoAdultos").attr('disabled', 'disabled');
                        $("#archivoVoluntadAdultos").attr('disabled', 'disabled');

                        //idFicha del formulario observaciones
                        $("#idFichaObservaAdulto").val(data.row.IdFicha);

                        $("#idFichaAdultos").val(data.row.IdFicha);
                        $("#semilleroAdulto").val(data.row.IdSemillero);
                        $("#nombresAdulto").val(data.row.Nombres);
                        $("#apellidosAdulto").val(data.row.Apellidos);

                        if (data.row.Sexo === "MASCULINO") {
                            $("#sexoAdulto-1").prop('checked', 'checked');
                        } else if (data.row.Sexo === "FEMENINO") {
                            $("#sexoAdulto-2").prop('checked', 'checked');
                        }

                        $("#departamentoNacimientoAdulto").val(data.row.IdDepartamentoNacimiento);
                        Carga2('../Controller/ctrlCombos.php?opcion=1&depar=' + data.row.IdDepartamentoNacimiento, 'ciudadNacimientoAdulto', data);

                        $("#fechaNacimientoAdulto").val(data.row.FechaNacimiento);
                        $("#edadAdulto").val(data.row.Edad);
                        $("#tipoDocumentoAdulto").val(data.row.TipoDocumento);
                        $("#documentoAdulto").val(data.row.Documento);
                        $("#rhAdulto").val(data.row.RH);
                        $("#tipoSeguridadAdulto").val(data.row.TipoDeSeguridad);
                        $("#entidadAdulto").val(data.row.Eps_sisben);
                        $("#telefonoAdulto").val(data.row.Telefono);
                        $("#ocupacionAdulto").val(data.row.Ocupacion);
                        $("#celularAdulto").val(data.row.Celular);
                        $("#direccionAdulto").val(data.row.Direccion);
                        $("#barrioOveredaAdulto").val(data.row.BarrioOvereda);
                        $("#barrioAdulto").val(data.row.Barrio_vereda);
                        $("#emailAdulto").val(data.row.Email);
                        $("#departamentoResidenciaAdulto").val(data.row.IdDepartamentoResidencia);
                        Carga2('../Controller/ctrlCombos.php?opcion=1&depar=' + data.row.IdDepartamentoResidencia, 'ciudadResidenciaAdulto', data);

                        $("#nivelEscolaridad").val(data.row.NivelEscolaridad);
                        $("#estadoEscolaridad").val(data.row.EstadoEscolarizacion);
                        $("#areaProfesionalizacion").val(data.row.AreaEspecializacion);
                        $("#anoIngresoAdulto").val(data.row.AnoDeIngreso);
                        $("#anoPermanenciaAdulto").val(data.row.AnosDePermanencia);
                        $("#nombresNino").val(data.row.NombreNino);
                        $("#parentezcoNino").val(data.row.ParentezcoNino);
                        $("#programaNino").val(data.row.Programa);
                        $("#tipologiaAdulto").val(data.row.TipologiaFamiliar);
                        $("#discapacidadAdulto").val(data.row.Discapacidad);
                        $("#observacionDiscapaAdulto").val(data.row.ObservacionDiscapacidad);
                        $("#desplazadoAdulto").val(data.row.Desplazado);
                        $("#registroAdulto").val(data.row.Registro);
                        $("#victimaAdulto").val(data.row.Victima);
                        $("#registroVictimaAdulto").val(data.row.Registro_victima);
                        $("#etniaAdulto").val(data.row.Etnia);
                        $("#numeroMiembrosAdulto").val(data.row.MiembrosFamilia);
                        $("#ocupacionMiembrosAdulto").val(data.row.OcupacionMiembros);
                        $("#empleoFormalAdulto").val(data.row.PersonasEmpleoFormal);
                        $("#empleoInformalAdulto").val(data.row.PersonasEmpleoInformal);
                        $("#familiarEmpresaAdulto").val(data.row.FamiliaresEmpresa);
                        $("#companiaAdulto").val(data.row.Compania);
                        $("#tipoVinculacionAdulto").val(data.row.TipoVinculacion);
                        $("#nombresFamiliarEmpresaAdulto").val(data.row.NombreParentezco);

                        $("#Ap1").addClass('btn-success');
                        $("#Ap2").removeClass('btn-success');
                        $("#Ap3").removeClass('btn-success');
                        $("#Ap4").removeClass('btn-success');
                        $("#Ap5").removeClass('btn-success');
                        $("#Apaso1").show();
                        $("#Apaso2").hide();
                        $("#Apaso3").hide();
                        $("#Apaso4").hide();
                        $("#Apaso5").hide();

                        $("#listadoFichas").hide();
                        $("#fichaSocioFamiliarAdultos").show();
                        $("#continue1Adulto").hide();
                        $("#continue2Adulto").hide();
                        $("#continue3Adulto").hide();
                        $("#updateAdulto").hide();
                        $("#saveAdulto").hide();
                        $("#limpiarAdulto").hide();
                        $("#modiAdulto").show();
                        $("#returnFichas2").show();
                        $("#enviarDocumentoAdultos").hide();
                        $("#enviarFotoAdultos").hide();
                        $("#enviarVoluntadAdultos").hide();

                        var oTable = $('#tblRolArchivosAdultos').dataTable();
                        oTable.fnDestroy();
                        tablaAdultos(data.row.IdFicha);

                        var oTable = $('#tblRolObservacionAdulto').dataTable();
                        oTable.fnDestroy();
                        tablaObservacionesAdultos(data.row.IdFicha);

                    } else if (data.row.TipoRegistro >= 20 && data.row.TipoRegistro < 30) {

                        $("#semilleroVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#tipoDocumentoVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#documentoVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#nombresVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#apellidosVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#sexoVolunEgres-1").css({"border": "", "box-shadow": ""});
                        $("#sexoVolunEgres-2").css({"border": "", "box-shadow": ""});
                        $("#departamentoNacimientoVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#ciudadNacimientoVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#fechaNacimientoVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#edadVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#anoIngresoVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#anoPermanenciaVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#departamentoResidenciaVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#ciudadResidenciaVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#celularVolunEgres").css({"border": "", "box-shadow": ""});

                        $("#semilleroVolunEgres").attr('disabled', 'disabled');
                        $("#tipoDocumentoVolunEgres").attr('disabled', 'disabled');
                        $("#documentoVolunEgres").attr('disabled', 'disabled');
                        $("#nombresVolunEgres").attr('disabled', 'disabled');
                        $("#apellidosVolunEgres").attr('disabled', 'disabled');
                        $("#sexoVolunEgres-1").attr('disabled', 'disabled');
                        $("#sexoVolunEgres-2").attr('disabled', 'disabled');
                        $("#departamentoNacimientoVolunEgres").attr('disabled', 'disabled');
                        $("#ciudadNacimientoVolunEgres").attr('disabled', 'disabled');
                        $("#fechaNacimientoVolunEgres").attr('disabled', 'disabled');
                        $("#edadVolunEgres").attr('disabled', 'disabled');
                        $("#estadoCivilVolunEgres").attr('disabled', 'disabled');
                        $("#numeroHijosVolunEgres").attr('disabled', 'disabled');
                        $("#promocionVolunEgres").attr('disabled', 'disabled');
                        $("#anoIngresoVolunEgres").attr('disabled', 'disabled');
                        $("#anoPermanenciaVolunEgres").attr('disabled', 'disabled');
                        $("#departamentoResidenciaVolunEgres").attr('disabled', 'disabled');
                        $("#ciudadResidenciaVolunEgres").attr('disabled', 'disabled');
                        $("#barrioOveredaVolunEgres").attr('disabled', 'disabled');
                        $("#barrioVolunEgres").attr('disabled', 'disabled');
                        $("#direccionVolunEgres").attr('disabled', 'disabled');
                        $("#telefonoVolunEgres").attr('disabled', 'disabled');
                        $("#celularVolunEgres").attr('disabled', 'disabled');
                        $("#emailVolunEgres").attr('disabled', 'disabled');
                        $("#nivelEscolaridadVolunEgres").attr('disabled', 'disabled');
                        $("#estadoEscolaridadVolunEgres").attr('disabled', 'disabled');
                        $("#semestreVolunEgres").attr('disabled', 'disabled');
                        $("#areaProfesionalizacionVolunEgres").attr('disabled', 'disabled');
                        $("#lugarFormacionVolunEgres").attr('disabled', 'disabled');
                        $("#trabajaActualmenteVolunEgres").attr('disabled', 'disabled');
                        $("#tipoTrabajoVolunEgres").attr('disabled', 'disabled');
                        $("#nombreEmpresaVolunEgres").attr('disabled', 'disabled');
                        $("#tipoContratoVolunEgres").attr('disabled', 'disabled');
                        $("#archivoDocumentoVolunEgres").attr('disabled', 'disabled');
                        $("#archivoFotoVolunEgres").attr('disabled', 'disabled');
                        $("#archivoVoluntad").attr('disabled', 'archivoVoluntadVolunEgres');

                        //idFicha del formulario observaciones
                        $("#idFichaObservaVolunEgres").val(data.row.IdFicha);

                        $("#idFichaVolunEgres").val(data.row.IdFicha);
                        $("#semilleroVolunEgres").val(data.row.IdSemillero);
                        $("#tipoDocumentoVolunEgres").val(data.row.TipoDocumento);
                        $("#documentoVolunEgres").val(data.row.Documento);
                        $("#nombresVolunEgres").val(data.row.Nombres);
                        $("#apellidosVolunEgres").val(data.row.Apellidos);

                        if (data.row.Sexo === "MASCULINO") {
                            $("#sexoVolunEgres-1").prop('checked', 'checked');
                        } else if (data.row.Sexo === "FEMENINO") {
                            $("#sexoVolunEgres-2").prop('checked', 'checked');
                        }

                        $("#departamentoNacimientoVolunEgres").val(data.row.IdDepartamentoNacimiento);
                        Carga2('../Controller/ctrlCombos.php?opcion=1&depar=' + data.row.IdDepartamentoNacimiento, 'ciudadNacimientoVolunEgres', data);

                        $("#fechaNacimientoVolunEgres").val(data.row.FechaNacimiento);
                        $("#edadVolunEgres").val(data.row.Edad);
                        $("#estadoCivilVolunEgres").val(data.row.Estado_civil);
                        $("#numeroHijosVolunEgres").val(data.row.Numero_hijos);
                        $("#promocionVolunEgres").val(data.row.Promocion_egresado);
                        $("#anoIngresoVolunEgres").val(data.row.AnoDeIngreso);
                        $("#anoPermanenciaVolunEgres").val(data.row.AnosDePermanencia);
                        $("#departamentoResidenciaVolunEgres").val(data.row.IdDepartamentoResidencia);
                        Carga2('../Controller/ctrlCombos.php?opcion=1&depar=' + data.row.IdDepartamentoResidencia, 'ciudadResidenciaVolunEgres', data);

                        $("#barrioOveredaVolunEgres").val(data.row.BarrioOvereda);
                        $("#barrioVolunEgres").val(data.row.Barrio_vereda);
                        $("#direccionVolunEgres").val(data.row.Direccion);
                        $("#telefonoVolunEgres").val(data.row.Telefono);
                        $("#celularVolunEgres").val(data.row.Celular);
                        $("#emailVolunEgres").val(data.row.Email);
                        $("#nivelEscolaridadVolunEgres").val(data.row.NivelEscolaridad);
                        $("#estadoEscolaridadVolunEgres").val(data.row.EstadoEscolarizacion);
                        $("#semestreVolunEgres").val(data.row.Semestre_escolaridad);
                        $("#areaProfesionalizacionVolunEgres").val(data.row.AreaEspecializacion);
                        $("#lugarFormacionVolunEgres").val(data.row.Lugar_formacion);
                        $("#trabajaActualmenteVolunEgres").val(data.row.Trabaja_actualmente);
                        $("#tipoTrabajoVolunEgres").val(data.row.Tipo_trabajo);
                        $("#nombreEmpresaVolunEgres").val(data.row.Nombre_empresa);
                        $("#tipoContratoVolunEgres").val(data.row.Tipo_contrato);

                        $("#VEp1").addClass('btn-success');
                        $("#VEp2").removeClass('btn-success');
                        $("#VEp3").removeClass('btn-success');
                        $("#VEp4").removeClass('btn-success');
                        $("#VEpaso1").show();
                        $("#VEpaso2").hide();
                        $("#VEpaso3").hide();
                        $("#VEpaso4").hide();

                        $("#listadoFichas").hide();
                        $("#fichaVoluntariosEgresados").show();
                        $("#continue1VolunEgres").hide();
                        $("#saveVolunEgres").hide();
                        $("#updateVolunEgres").hide();
                        $("#limpiarAdulto").hide();
                        $("#modiVolunEgres").show();
                        $("#returnFichas3").show();
                        $("#enviarDocumentoVolunEgres").hide();
                        $("#enviarFotoVolunEgres").hide();
                        $("#enviarVoluntadVolunEgres").hide();

                        var oTable = $('#tblRolArchivosVolunEgres').dataTable();
                        oTable.fnDestroy();
                        tablaDocumentos(data.row.IdFicha);

                        var oTable = $('#tblRolObservacionVolunEgres').dataTable();
                        oTable.fnDestroy();
                        tablaObservacionesVolunEgre(data.row.IdFicha);
                    }
                }
            }
        });

    });

    //evento del boton consultar el cual oculta la lista de fichas del semillero y muestra la información de la ficha seleccionado
    $('#tblRol2').on('click', 'a.consult', function () {

        $("#LoadingImage").show();
        var id = $(this).prop('title');
        $.ajax({
            type: "POST",
            url: "../Controller/ctrlFichaSocioFamiliar.php?opcion=3",
            data: {idFicha: id},
            error: function (jqXHR, textStatus, errorThrown) {
                //*Ocurrió un eror en la petición ajax
                $("#LoadingImage").hide();
                console.log(textStatus + "\n" + errorThrown);
            },
            success: function (result) {
                var data = eval('(' + result + ')');

                if (data.res === 'fail') {

                    $("#LoadingImage").hide();
                    var modal = $('#exampleconfirmacion');
                    modal.find('.modal-title').text("Confirmación");
                    modal.find('#modal-message').html(data.msg);
                    $('#exampleconfirmacion').modal('show');

                } else if (data.res === 'all') {

                    $("#LoadingImage").hide();
                    if (data.row.TipoRegistro < 10) {

                        $("#semilleroN").css({"border": "", "box-shadow": ""});
                        $("#nombres").css({"border": "", "box-shadow": ""});
                        $("#apellidos").css({"border": "", "box-shadow": ""});
                        $("#sexo-1").css({"border": "", "box-shadow": ""});
                        $("#sexo-2").css({"border": "", "box-shadow": ""});
                        $("#departamentoNacimiento").css({"border": "", "box-shadow": ""});
                        $("#ciudadNacimiento").css({"border": "", "box-shadow": ""});
                        $("#fechaNacimiento").css({"border": "", "box-shadow": ""});
                        $("#edad").css({"border": "", "box-shadow": ""});
                        $("#tipoDocumento").css({"border": "", "box-shadow": ""});
                        $("#documento").css({"border": "", "box-shadow": ""});
                        $("#rh").css({"border": "", "box-shadow": ""});
                        $("#tipoSeguridad").css({"border": "", "box-shadow": ""});
                        $("#telefonoN").css({"border": "", "box-shadow": ""});
                        $("#celular").css({"border": "", "box-shadow": ""});
                        $("#direccionN").css({"border": "", "box-shadow": ""});
                        $("#barrioOvereda").css({"border": "", "box-shadow": ""});
                        $("#email").css({"border": "", "box-shadow": ""});
                        $("#departamentoResidencia").css({"border": "", "box-shadow": ""});
                        $("#ciudadResidencia").css({"border": "", "box-shadow": ""});
                        $("#institucion").css({"border": "", "box-shadow": ""});
                        $("#grado").css({"border": "", "box-shadow": ""});
                        $("#repitencia").css({"border": "", "box-shadow": ""});
                        $("#anoIngreso").css({"border": "", "box-shadow": ""});
                        $("#anoPermanencia").css({"border": "", "box-shadow": ""});
                        $("#nombresPadre").css({"border": "", "box-shadow": ""});
                        $("#telefonoPadre").css({"border": "", "box-shadow": ""});
                        $("#celularPadre").css({"border": "", "box-shadow": ""});
                        $("#celularCuidador").css({"border": "", "box-shadow": ""});
                        $("#tipologia").css({"border": "", "box-shadow": ""});
                        $("#numeroMiembros").css({"border": "", "box-shadow": ""});
                        $("#etnia").css({"border": "", "box-shadow": ""});
                        $("#desplazado").css({"border": "", "box-shadow": ""});
                        $("#discapacidad").css({"border": "", "box-shadow": ""});
                        $("#familiarEmpresa").css({"border": "", "box-shadow": ""});

                        $("#semilleroN").attr('disabled', 'disabled');
                        $("#nombres").attr('disabled', 'disabled');
                        $("#apellidos").attr('disabled', 'disabled');
                        $("#sexo-1").attr('disabled', 'disabled');
                        $("#sexo-2").attr('disabled', 'disabled');
                        $("#departamentoNacimiento").attr('disabled', 'disabled');
                        $("#ciudadNacimiento").attr('disabled', 'disabled');
                        $("#fechaNacimiento").attr('disabled', 'disabled');
                        $("#edad").attr('disabled', 'disabled');
                        $("#tipoDocumento").attr('disabled', 'disabled');
                        $("#documento").attr('disabled', 'disabled');
                        $("#rh").attr('disabled', 'disabled');
                        $("#tipoSeguridad").attr('disabled', 'disabled');
                        $("#entidad").attr('disabled', 'disabled');
                        $("#telefonoN").attr('disabled', 'disabled');
                        $("#ocupacion").attr('disabled', 'disabled');
                        $("#celular").attr('disabled', 'disabled');
                        $("#direccionN").attr('disabled', 'disabled');
                        $("#barrioOvereda").attr('disabled', 'disabled');
                        $("#barrioN").attr('disabled', 'disabled');
                        $("#email").attr('disabled', 'disabled');
                        $("#departamentoResidencia").attr('disabled', 'disabled');
                        $("#ciudadResidencia").attr('disabled', 'disabled');
                        $("#institucion").attr('disabled', 'disabled');
                        $("#grado").attr('disabled', 'disabled');
                        $("#repitencia").attr('disabled', 'disabled');
                        $("#cuantos").attr('disabled', 'disabled');
                        $("#cualesRepite").attr('disabled', 'disabled');
                        $("#anoIngreso").attr('disabled', 'disabled');
                        $("#anoPermanencia").attr('disabled', 'disabled');
                        $("#nombresPadre").attr('disabled', 'disabled');
                        $("#telefonoPadre").attr('disabled', 'disabled');
                        $("#celularPadre").attr('disabled', 'disabled');
                        $("#nombresCuidador").attr('disabled', 'disabled');
                        $("#parentezcoCuidador").attr('disabled', 'disabled');
                        $("#telefonoCuidador").attr('disabled', 'disabled');
                        $("#celularCuidador").attr('disabled', 'disabled');
                        $("#tipologia").attr('disabled', 'disabled');
                        $("#numeroMiembros").attr('disabled', 'disabled');
                        $("#desplazado").attr('disabled', 'disabled');
                        $("#registro").attr('disabled', 'disabled');                        
                        $("#victima").attr('disabled', 'disabled');
                        $("#registroVictima").attr('disabled', 'disabled');
                        $("#discapacidad").attr('disabled', 'disabled');
                        $("#observacionDiscapa").attr('disabled', 'disabled');
                        $("#etnia").attr('disabled', 'disabled');
                        $("#empleoFormal").attr('disabled', 'disabled');
                        $("#empleoInformal").attr('disabled', 'disabled');
                        $("#familiarEmpresa").attr('disabled', 'disabled');
                        $("#compania").attr('disabled', 'disabled');
                        $("#tipoVinculacion").attr('disabled', 'disabled');
                        $("#nombresFamiliarEmpresa").attr('disabled', 'disabled');                        
                        $("#participaOtroSemillero").attr('disabled', 'disabled');
                        $("#otroSemilleros").attr('disabled', 'disabled');
                        $("#participaServicios").attr('disabled', 'disabled');
                        $("#queSemilleros").attr('disabled', 'disabled');
                        $("#archivoDocumento").attr('disabled', 'disabled');
                        $("#archivoFoto").attr('disabled', 'disabled');
                        $("#archivoVoluntad").attr('disabled', 'disabled');

                        //idFicha del formulario observaciones
                        $("#idFichaObserva").val(data.row.IdFicha);

                        $("#idFichaNinos").val(data.row.IdFicha);
                        $("#semilleroN").val(data.row.IdSemillero);
                        $("#nombres").val(data.row.Nombres);
                        $("#apellidos").val(data.row.Apellidos);

                        if (data.row.Sexo === "MASCULINO") {
                            $("#sexo-1").prop('checked', 'checked');
                        } else if (data.row.Sexo === "FEMENINO") {
                            $("#sexo-2").prop('checked', 'checked');
                        }

                        $("#departamentoNacimiento").val(data.row.IdDepartamentoNacimiento);
                        Carga2('../Controller/ctrlCombos.php?opcion=1&depar=' + data.row.IdDepartamentoNacimiento, 'ciudadNacimiento', data);

                        $("#fechaNacimiento").val(data.row.FechaNacimiento);
                        $("#edad").val(data.row.Edad);
                        $("#tipoDocumento").val(data.row.TipoDocumento);
                        $("#documento").val(data.row.Documento);
                        $("#rh").val(data.row.RH);
                        $("#tipoSeguridad").val(data.row.TipoDeSeguridad);
                        $("#entidad").val(data.row.Eps_sisben);
                        $("#telefonoN").val(data.row.Telefono);
                        $("#ocupacion").val(data.row.Ocupacion);
                        $("#celular").val(data.row.Celular);
                        $("#direccionN").val(data.row.Direccion);
                        $("#barrioN").val(data.row.Barrio_vereda);
                        $("#barrioOvereda").val(data.row.BarrioOvereda);
                        $("#email").val(data.row.Email);
                        $("#departamentoResidencia").val(data.row.IdDepartamentoResidencia);
                        Carga2('../Controller/ctrlCombos.php?opcion=1&depar=' + data.row.IdDepartamentoResidencia, 'ciudadResidencia', data);

                        $("#institucion").val(data.row.Institucion);
                        $("#grado").val(data.row.Grado);
                        $("#repitencia").val(data.row.Repitencia);
                        $("#cuantos").val(data.row.Cuantos);
                        $("#cualesRepite").val(data.row.Cuales);
                        $("#anoIngreso").val(data.row.AnoDeIngreso);
                        $("#anoPermanencia").val(data.row.AnosDePermanencia);
                        $("#nombresPadre").val(data.row.NombreMadre_Padre);
                        $("#telefonoPadre").val(data.row.TelefonoMadre_Padre);
                        $("#celularPadre").val(data.row.CelularMadre_padre);
                        $("#nombresCuidador").val(data.row.NombreCuidador);
                        $("#parentezcoCuidador").val(data.row.ParentezcoCuidador);
                        $("#telefonoCuidador").val(data.row.TelefonoCuidador);
                        $("#celularCuidador").val(data.row.CelularCuidador);
                        $("#tipologia").val(data.row.TipologiaFamiliar);
                        $("#numeroMiembros").val(data.row.MiembrosFamilia);
                        $("#desplazado").val(data.row.Desplazado);
                        $("#registro").val(data.row.Registro);    
                        $("#victima").val(data.row.Victima);
                        $("#registroVictima").val(data.row.Registro_victima);
                        $("#discapacidad").val(data.row.Discapacidad);
                        $("#observacionDiscapa").val(data.row.ObservacionDiscapacidad);
                        $("#etnia").val(data.row.Etnia);
                        $("#empleoFormal").val(data.row.PersonasEmpleoFormal);
                        $("#empleoInformal").val(data.row.PersonasEmpleoInformal);
                        $("#familiarEmpresa").val(data.row.FamiliaresEmpresa);
                        $("#compania").val(data.row.Compania);
                        $("#tipoVinculacion").val(data.row.TipoVinculacion);
                        $("#nombresFamiliarEmpresa").val(data.row.NombreParentezco);                        
                        $("#participaOtroSemillero").val(data.row.Participa_otro_semillero);
                        $("#otroSemilleros").val(data.row.Otros_semilleros);
                        $("#participaServicios").val(data.row.Participa_servicios);
                        $("#queSemilleros").val(data.row.Que_servicios);

                        $("#p1").addClass('btn-success');
                        $("#p2").removeClass('btn-success');
                        $("#p3").removeClass('btn-success');
                        $("#p4").removeClass('btn-success');
                        $("#p5").removeClass('btn-success');
                        $("#p6").removeClass('btn-success');
                        $("#paso1").show();
                        $("#paso2").hide();
                        $("#paso3").hide();
                        $("#paso4").hide();
                        $("#paso5").hide();
                        $("#paso6").hide();

                        $("#listadoFichas").hide();
                        $("#fichaSocioFamiliarNinos").show();
                        $("#continue1").hide();
                        $("#continue2").hide();
                        $("#continue3").hide();
                        $("#updateNino").hide();
                        $("#save").hide();
                        $("#limpiar").hide();
                        $("#modiNino").show();
                        $("#returnFichas").show();
                        $("#enviarDocumento").hide();
                        $("#enviarFotoN").hide();
                        $("#enviarVoluntad").hide();

                        var oTable = $('#tblRolArchivosNinos').dataTable();
                        oTable.fnDestroy();
                        tablaNinos(data.row.IdFicha);

                        var oTable = $('#tblRolObservacion').dataTable();
                        oTable.fnDestroy();
                        tablaObservacionesNinos(data.row.IdFicha);

                    } else if (data.row.TipoRegistro >= 10 && data.row.TipoRegistro < 20) {

                        $("#semilleroAdulto").css({"border": "", "box-shadow": ""});
                        $("#nombresAdulto").css({"border": "", "box-shadow": ""});
                        $("#apellidosAdulto").css({"border": "", "box-shadow": ""});
                        $("#sexoAdulto-1").css({"border": "", "box-shadow": ""});
                        $("#sexoAdulto-2").css({"border": "", "box-shadow": ""});
                        $("#departamentoNacimientoAdulto").css({"border": "", "box-shadow": ""});
                        $("#ciudadNacimientoAdulto").css({"border": "", "box-shadow": ""});
                        $("#fechaNacimientoAdulto").css({"border": "", "box-shadow": ""});
                        $("#edadAdulto").css({"border": "", "box-shadow": ""});
                        $("#tipoDocumentoAdulto").css({"border": "", "box-shadow": ""});
                        $("#documentoAdulto").css({"border": "", "box-shadow": ""});
                        $("#rhAdulto").css({"border": "", "box-shadow": ""});
                        $("#tipoSeguridadAdulto").css({"border": "", "box-shadow": ""});
                        $("#telefonoAdulto").css({"border": "", "box-shadow": ""});
                        $("#celularAdulto").css({"border": "", "box-shadow": ""});
                        $("#barrioOveredaAdulto").css({"border": "", "box-shadow": ""});
                        $("#celularAdulto").css({"border": "", "box-shadow": ""});
                        $("#emailAdulto").css({"border": "", "box-shadow": ""});
                        $("#departamentoResidenciaAdulto").css({"border": "", "box-shadow": ""});
                        $("#ciudadResidenciaAdulto").css({"border": "", "box-shadow": ""});
                        $("#nivelEscolaridad").css({"border": "", "box-shadow": ""});
                        $("#estadoEscolaridad").css({"border": "", "box-shadow": ""});
                        $("#anoIngresoAdulto").css({"border": "", "box-shadow": ""});
                        $("#anoPermanenciaAdulto").css({"border": "", "box-shadow": ""});
                        $("#tipologiaAdulto").css({"border": "", "box-shadow": ""});
                        $("#desplazadoAdulto").css({"border": "", "box-shadow": ""});
                        $("#discapacidadAdulto").css({"border": "", "box-shadow": ""});
                        $("#etniaAdulto").css({"border": "", "box-shadow": ""});
                        $("#numeroMiembrosAdulto").css({"border": "", "box-shadow": ""});
                        $("#familiarEmpresaAdulto").css({"border": "", "box-shadow": ""});

                        $("#semilleroAdulto").attr('disabled', 'disabled');
                        $("#nombresAdulto").attr('disabled', 'disabled');
                        $("#apellidosAdulto").attr('disabled', 'disabled');
                        $("#sexoAdulto-1").attr('disabled', 'disabled');
                        $("#sexoAdulto-2").attr('disabled', 'disabled');
                        $("#departamentoNacimientoAdulto").attr('disabled', 'disabled');
                        $("#ciudadNacimientoAdulto").attr('disabled', 'disabled');
                        $("#fechaNacimientoAdulto").attr('disabled', 'disabled');
                        $("#edadAdulto").attr('disabled', 'disabled');
                        $("#tipoDocumentoAdulto").attr('disabled', 'disabled');
                        $("#documentoAdulto").attr('disabled', 'disabled');
                        $("#rhAdulto").attr('disabled', 'disabled');
                        $("#tipoSeguridadAdulto").attr('disabled', 'disabled');
                        $("#entidadAdulto").attr('disabled', 'disabled');
                        $("#telefonoAdulto").attr('disabled', 'disabled');
                        $("#ocupacionAdulto").attr('disabled', 'disabled');
                        $("#celularAdulto").attr('disabled', 'disabled');
                        $("#direccionAdulto").attr('disabled', 'disabled');
                        $("#barrioOveredaAdulto").attr('disabled', 'disabled');
                        $("#barrioAdulto").attr('disabled', 'disabled');
                        $("#emailAdulto").attr('disabled', 'disabled');
                        $("#departamentoResidenciaAdulto").attr('disabled', 'disabled');
                        $("#ciudadResidenciaAdulto").attr('disabled', 'disabled');
                        $("#nivelEscolaridad").attr('disabled', 'disabled');
                        $("#estadoEscolaridad").attr('disabled', 'disabled');
                        $("#areaProfesionalizacion").attr('disabled', 'disabled');
                        $("#anoIngresoAdulto").attr('disabled', 'disabled');
                        $("#anoPermanenciaAdulto").attr('disabled', 'disabled');
                        $("#nombresNino").attr('disabled', 'disabled');
                        $("#parentezcoNino").attr('disabled', 'disabled');
                        $("#programaNino").attr('disabled', 'disabled');
                        $("#tipologiaAdulto").attr('disabled', 'disabled');
                        $("#discapacidadAdulto").attr('disabled', 'disabled');
                        $("#observacionDiscapaAdulto").attr('disabled', 'disabled');
                        $("#desplazadoAdulto").attr('disabled', 'disabled');
                        $("#registroAdulto").attr('disabled', 'disabled');              
                        $("#victimaAdulto").attr('disabled', 'disabled');
                        $("#registroVictimaAdulto").attr('disabled', 'disabled');
                        $("#etniaAdulto").attr('disabled', 'disabled');
                        $("#numeroMiembrosAdulto").attr('disabled', 'disabled');
                        $("#ocupacionMiembrosAdulto").attr('disabled', 'disabled');
                        $("#empleoFormalAdulto").attr('disabled', 'disabled');
                        $("#empleoInformalAdulto").attr('disabled', 'disabled');
                        $("#familiarEmpresaAdulto").attr('disabled', 'disabled');
                        $("#companiaAdulto").attr('disabled', 'disabled');
                        $("#tipoVinculacionAdulto").attr('disabled', 'disabled');
                        $("#nombresFamiliarEmpresaAdulto").attr('disabled', 'disabled');
                        $("#archivoDocumentoAdultos").attr('disabled', 'disabled');
                        $("#archivoFotoAdultos").attr('disabled', 'disabled');
                        $("#archivoVoluntadAdultos").attr('disabled', 'disabled');

                        //idFicha del formulario observaciones
                        $("#idFichaObservaAdulto").val(data.row.IdFicha);

                        $("#idFichaAdultos").val(data.row.IdFicha);
                        $("#semilleroAdulto").val(data.row.IdSemillero);
                        $("#nombresAdulto").val(data.row.Nombres);
                        $("#apellidosAdulto").val(data.row.Apellidos);

                        if (data.row.Sexo === "MASCULINO") {
                            $("#sexoAdulto-1").prop('checked', 'checked');
                        } else if (data.row.Sexo === "FEMENINO") {
                            $("#sexoAdulto-2").prop('checked', 'checked');
                        }

                        $("#departamentoNacimientoAdulto").val(data.row.IdDepartamentoNacimiento);
                        Carga2('../Controller/ctrlCombos.php?opcion=1&depar=' + data.row.IdDepartamentoNacimiento, 'ciudadNacimientoAdulto', data);

                        $("#fechaNacimientoAdulto").val(data.row.FechaNacimiento);
                        $("#edadAdulto").val(data.row.Edad);
                        $("#tipoDocumentoAdulto").val(data.row.TipoDocumento);
                        $("#documentoAdulto").val(data.row.Documento);
                        $("#rhAdulto").val(data.row.RH);
                        $("#tipoSeguridadAdulto").val(data.row.TipoDeSeguridad);
                        $("#entidadAdulto").val(data.row.Eps_sisben);
                        $("#telefonoAdulto").val(data.row.Telefono);
                        $("#ocupacionAdulto").val(data.row.Ocupacion);
                        $("#celularAdulto").val(data.row.Celular);
                        $("#direccionAdulto").val(data.row.Direccion);
                        $("#barrioOveredaAdulto").val(data.row.BarrioOvereda);
                        $("#barrioAdulto").val(data.row.Barrio_vereda);
                        $("#emailAdulto").val(data.row.Email);
                        $("#departamentoResidenciaAdulto").val(data.row.IdDepartamentoResidencia);
                        Carga2('../Controller/ctrlCombos.php?opcion=1&depar=' + data.row.IdDepartamentoResidencia, 'ciudadResidenciaAdulto', data);

                        $("#nivelEscolaridad").val(data.row.NivelEscolaridad);
                        $("#estadoEscolaridad").val(data.row.EstadoEscolarizacion);
                        $("#areaProfesionalizacion").val(data.row.AreaEspecializacion);
                        $("#anoIngresoAdulto").val(data.row.AnoDeIngreso);
                        $("#anoPermanenciaAdulto").val(data.row.AnosDePermanencia);
                        $("#nombresNino").val(data.row.NombreNino);
                        $("#parentezcoNino").val(data.row.ParentezcoNino);
                        $("#programaNino").val(data.row.Programa);
                        $("#tipologiaAdulto").val(data.row.TipologiaFamiliar);
                        $("#discapacidadAdulto").val(data.row.Discapacidad);
                        $("#observacionDiscapaAdulto").val(data.row.ObservacionDiscapacidad);
                        $("#desplazadoAdulto").val(data.row.Desplazado);
                        $("#registroAdulto").val(data.row.Registro);
                        $("#victimaAdulto").val(data.row.Victima);
                        $("#registroVictimaAdulto").val(data.row.Registro_victima);
                        $("#etniaAdulto").val(data.row.Etnia);
                        $("#numeroMiembrosAdulto").val(data.row.MiembrosFamilia);
                        $("#ocupacionMiembrosAdulto").val(data.row.OcupacionMiembros);
                        $("#empleoFormalAdulto").val(data.row.PersonasEmpleoFormal);
                        $("#empleoInformalAdulto").val(data.row.PersonasEmpleoInformal);
                        $("#familiarEmpresaAdulto").val(data.row.FamiliaresEmpresa);
                        $("#companiaAdulto").val(data.row.Compania);
                        $("#tipoVinculacionAdulto").val(data.row.TipoVinculacion);
                        $("#nombresFamiliarEmpresaAdulto").val(data.row.NombreParentezco);

                        $("#Ap1").addClass('btn-success');
                        $("#Ap2").removeClass('btn-success');
                        $("#Ap3").removeClass('btn-success');
                        $("#Ap4").removeClass('btn-success');
                        $("#Ap5").removeClass('btn-success');
                        $("#Apaso1").show();
                        $("#Apaso2").hide();
                        $("#Apaso3").hide();
                        $("#Apaso4").hide();
                        $("#Apaso5").hide();

                        $("#listadoFichas").hide();
                        $("#fichaSocioFamiliarAdultos").show();
                        $("#continue1Adulto").hide();
                        $("#continue2Adulto").hide();
                        $("#continue3Adulto").hide();
                        $("#updateAdulto").hide();
                        $("#saveAdulto").hide();
                        $("#limpiarAdulto").hide();
                        $("#modiAdulto").show();
                        $("#returnFichas2").show();
                        $("#enviarDocumentoAdultos").hide();
                        $("#enviarFotoAdultos").hide();
                        $("#enviarVoluntadAdultos").hide();

                        var oTable = $('#tblRolArchivosAdultos').dataTable();
                        oTable.fnDestroy();
                        tablaAdultos(data.row.IdFicha);

                        var oTable = $('#tblRolObservacionAdulto').dataTable();
                        oTable.fnDestroy();
                        tablaObservacionesAdultos(data.row.IdFicha);

                    } else if (data.row.TipoRegistro >= 20 && data.row.TipoRegistro < 30) {

                        $("#semilleroVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#tipoDocumentoVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#documentoVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#nombresVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#apellidosVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#sexoVolunEgres-1").css({"border": "", "box-shadow": ""});
                        $("#sexoVolunEgres-2").css({"border": "", "box-shadow": ""});
                        $("#departamentoNacimientoVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#ciudadNacimientoVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#fechaNacimientoVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#edadVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#anoIngresoVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#anoPermanenciaVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#departamentoResidenciaVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#ciudadResidenciaVolunEgres").css({"border": "", "box-shadow": ""});
                        $("#celularVolunEgres").css({"border": "", "box-shadow": ""});

                        $("#semilleroVolunEgres").attr('disabled', 'disabled');
                        $("#tipoDocumentoVolunEgres").attr('disabled', 'disabled');
                        $("#documentoVolunEgres").attr('disabled', 'disabled');
                        $("#nombresVolunEgres").attr('disabled', 'disabled');
                        $("#apellidosVolunEgres").attr('disabled', 'disabled');
                        $("#sexoVolunEgres-1").attr('disabled', 'disabled');
                        $("#sexoVolunEgres-2").attr('disabled', 'disabled');
                        $("#departamentoNacimientoVolunEgres").attr('disabled', 'disabled');
                        $("#ciudadNacimientoVolunEgres").attr('disabled', 'disabled');
                        $("#fechaNacimientoVolunEgres").attr('disabled', 'disabled');
                        $("#edadVolunEgres").attr('disabled', 'disabled');
                        $("#estadoCivilVolunEgres").attr('disabled', 'disabled');
                        $("#numeroHijosVolunEgres").attr('disabled', 'disabled');
                        $("#promocionVolunEgres").attr('disabled', 'disabled');
                        $("#anoIngresoVolunEgres").attr('disabled', 'disabled');
                        $("#anoPermanenciaVolunEgres").attr('disabled', 'disabled');
                        $("#departamentoResidenciaVolunEgres").attr('disabled', 'disabled');
                        $("#ciudadResidenciaVolunEgres").attr('disabled', 'disabled');
                        $("#barrioOveredaVolunEgres").attr('disabled', 'disabled');
                        $("#barrioVolunEgres").attr('disabled', 'disabled');
                        $("#direccionVolunEgres").attr('disabled', 'disabled');
                        $("#telefonoVolunEgres").attr('disabled', 'disabled');
                        $("#celularVolunEgres").attr('disabled', 'disabled');
                        $("#emailVolunEgres").attr('disabled', 'disabled');
                        $("#nivelEscolaridadVolunEgres").attr('disabled', 'disabled');
                        $("#estadoEscolaridadVolunEgres").attr('disabled', 'disabled');
                        $("#semestreVolunEgres").attr('disabled', 'disabled');
                        $("#areaProfesionalizacionVolunEgres").attr('disabled', 'disabled');
                        $("#lugarFormacionVolunEgres").attr('disabled', 'disabled');
                        $("#trabajaActualmenteVolunEgres").attr('disabled', 'disabled');
                        $("#tipoTrabajoVolunEgres").attr('disabled', 'disabled');
                        $("#nombreEmpresaVolunEgres").attr('disabled', 'disabled');
                        $("#tipoContratoVolunEgres").attr('disabled', 'disabled');
                        $("#archivoDocumentoVolunEgres").attr('disabled', 'disabled');
                        $("#archivoFotoVolunEgres").attr('disabled', 'disabled');
                        $("#archivoVoluntad").attr('disabled', 'archivoVoluntadVolunEgres');

                        //idFicha del formulario observaciones
                        $("#idFichaObservaVolunEgres").val(data.row.IdFicha);

                        $("#idFichaVolunEgres").val(data.row.IdFicha);
                        $("#semilleroVolunEgres").val(data.row.IdSemillero);
                        $("#tipoDocumentoVolunEgres").val(data.row.TipoDocumento);
                        $("#documentoVolunEgres").val(data.row.Documento);
                        $("#nombresVolunEgres").val(data.row.Nombres);
                        $("#apellidosVolunEgres").val(data.row.Apellidos);

                        if (data.row.Sexo === "MASCULINO") {
                            $("#sexoVolunEgres-1").prop('checked', 'checked');
                        } else if (data.row.Sexo === "FEMENINO") {
                            $("#sexoVolunEgres-2").prop('checked', 'checked');
                        }

                        $("#departamentoNacimientoVolunEgres").val(data.row.IdDepartamentoNacimiento);
                        Carga2('../Controller/ctrlCombos.php?opcion=1&depar=' + data.row.IdDepartamentoNacimiento, 'ciudadNacimientoVolunEgres', data);

                        $("#fechaNacimientoVolunEgres").val(data.row.FechaNacimiento);
                        $("#edadVolunEgres").val(data.row.Edad);
                        $("#estadoCivilVolunEgres").val(data.row.Estado_civil);
                        $("#numeroHijosVolunEgres").val(data.row.Numero_hijos);
                        $("#promocionVolunEgres").val(data.row.Promocion_egresado);
                        $("#anoIngresoVolunEgres").val(data.row.AnoDeIngreso);
                        $("#anoPermanenciaVolunEgres").val(data.row.AnosDePermanencia);
                        $("#departamentoResidenciaVolunEgres").val(data.row.IdDepartamentoResidencia);
                        Carga2('../Controller/ctrlCombos.php?opcion=1&depar=' + data.row.IdDepartamentoResidencia, 'ciudadResidenciaVolunEgres', data);

                        $("#barrioOveredaVolunEgres").val(data.row.BarrioOvereda);
                        $("#barrioVolunEgres").val(data.row.Barrio_vereda);
                        $("#direccionVolunEgres").val(data.row.Direccion);
                        $("#telefonoVolunEgres").val(data.row.Telefono);
                        $("#celularVolunEgres").val(data.row.Celular);
                        $("#emailVolunEgres").val(data.row.Email);
                        $("#nivelEscolaridadVolunEgres").val(data.row.NivelEscolaridad);
                        $("#estadoEscolaridadVolunEgres").val(data.row.EstadoEscolarizacion);
                        $("#semestreVolunEgres").val(data.row.Semestre_escolaridad);
                        $("#areaProfesionalizacionVolunEgres").val(data.row.AreaEspecializacion);
                        $("#lugarFormacionVolunEgres").val(data.row.Lugar_formacion);
                        $("#trabajaActualmenteVolunEgres").val(data.row.Trabaja_actualmente);
                        $("#tipoTrabajoVolunEgres").val(data.row.Tipo_trabajo);
                        $("#nombreEmpresaVolunEgres").val(data.row.Nombre_empresa);
                        $("#tipoContratoVolunEgres").val(data.row.Tipo_contrato);

                        $("#VEp1").addClass('btn-success');
                        $("#VEp2").removeClass('btn-success');
                        $("#VEp3").removeClass('btn-success');
                        $("#VEp4").removeClass('btn-success');
                        $("#VEpaso1").show();
                        $("#VEpaso2").hide();
                        $("#VEpaso3").hide();
                        $("#VEpaso4").hide();

                        $("#listadoFichas").hide();
                        $("#fichaSocioFamiliarVolunEgres").show();
                        $("#continue1VolunEgres").hide();
                        $("#saveVolunEgres").hide();
                        $("#updateVolunEgres").hide();
                        $("#limpiarAdulto").hide();
                        $("#modiVolunEgres").show();
                        $("#returnFichas3").show();
                        $("#enviarDocumentoVolunEgres").hide();
                        $("#enviarFotoVolunEgres").hide();
                        $("#enviarVoluntadVolunEgres").hide();

                        var oTable = $('#tblRolArchivosVolunEgres').dataTable();
                        oTable.fnDestroy();
                        tablaDocumentos(data.row.IdFicha);

                        var oTable = $('#tblRolObservacionVolunEgres').dataTable();
                        oTable.fnDestroy();
                        tablaObservacionesVolunEgre(data.row.IdFicha);
                    }
                }
            }
        });

    });

    //evento del boton volver el cual oculta el formulario de la ficha niños y despliega el listado de fichas
    $('#returnFichas').click(function () {

        $("#fichaSocioFamiliarNinos").hide();
        $("#listadoFichas").show();
    });

    //evento del boton volver el cual oculta el formulario de la ficha adultos y despliega el listado de fichas
    $('#returnFichas2').click(function () {

        $("#fichaSocioFamiliarAdultos").hide();
        $("#listadoFichas").show();
    });

    //evento del boton volver el cual oculta el formulario de la ficha voluntarios, egresados y despliega el listado de fichas
    $('#returnFichas3').click(function () {

        $("#fichaVoluntariosEgresados").hide();
        $("#listadoFichas").show();
    });

    //evento que habilita todos los campos de la ficha niño para hacer actualizaciones
    $('#modiNino').click(function () {

        $("#semilleroN").removeAttr("disabled");
        $("#nombres").removeAttr("disabled");
        $("#apellidos").removeAttr("disabled");
        $("#sexo-1").removeAttr("disabled");
        $("#sexo-2").removeAttr("disabled");
        $("#departamentoNacimiento").removeAttr("disabled");
        $("#ciudadNacimiento").removeAttr("disabled");
        $("#fechaNacimiento").removeAttr("disabled");
        $("#edad").removeAttr("disabled");
        $("#tipoDocumento").removeAttr("disabled");
        $("#documento").removeAttr("disabled");
        $("#rh").removeAttr("disabled");
        $("#tipoSeguridad").removeAttr("disabled");
        $("#entidad").removeAttr("disabled");
        $("#telefonoN").removeAttr("disabled");
        $("#ocupacion").removeAttr("disabled");
        $("#celular").removeAttr("disabled");
        $("#direccionN").removeAttr("disabled");
        $("#barrioOvereda").removeAttr("disabled");
        $("#barrioN").removeAttr("disabled");
        $("#email").removeAttr("disabled");
        $("#departamentoResidencia").removeAttr("disabled");
        $("#ciudadResidencia").removeAttr("disabled");
        $("#institucion").removeAttr("disabled");
        $("#grado").removeAttr("disabled");
        $("#repitencia").removeAttr("disabled");

        if ($("#repitencia").val() === "SI") {

            $("#cuantos").removeAttr("disabled");
            $("#cualesRepite").removeAttr("disabled");
        }

        $("#anoIngreso").removeAttr("disabled");
        $("#anoPermanencia").removeAttr("disabled");
        $("#nombresPadre").removeAttr("disabled");
        $("#telefonoPadre").removeAttr("disabled");
        $("#celularPadre").removeAttr("disabled");
        $("#nombresCuidador").removeAttr("disabled");
        $("#parentezcoCuidador").removeAttr("disabled");
        $("#telefonoCuidador").removeAttr("disabled");
        $("#celularCuidador").removeAttr("disabled");
        $("#tipologia").removeAttr("disabled");
        $("#numeroMiembros").removeAttr("disabled");
        $("#desplazado").removeAttr("disabled");

        if ($("#desplazado").val() === "SI") {
            $("#registro").removeAttr("disabled");
            $("#victima").removeAttr("disabled");
        }

        if ($("#victima").val() === "SI") {
            $("#registroVictima").removeAttr("disabled");
        }

        $("#discapacidad").removeAttr("disabled");

        if ($("#discapacidad").val() === "SI") {
            $("#observacionDiscapa").removeAttr("disabled");
        }

        $("#etnia").removeAttr("disabled");
        $("#empleoFormal").removeAttr("disabled");
        $("#empleoInformal").removeAttr("disabled");
        $("#familiarEmpresa").removeAttr("disabled");

        if ($("#familiarEmpresa").val() === "SI") {
            $("#compania").removeAttr("disabled");
            $("#tipoVinculacion").removeAttr("disabled");
            $("#nombresFamiliarEmpresa").removeAttr("disabled");
        }

        $("#participaOtroSemillero").removeAttr("disabled");

        if ($("#participaOtroSemillero").val() === "SI") {
            $("#otroSemilleros").removeAttr("disabled");
        }

        $("#participaServicios").removeAttr("disabled");

        if ($("#participaServicios").val() === "SI") {
            $("#queSemilleros").removeAttr("disabled");
        }

        $("#archivoDocumento").removeAttr("disabled");
        $("#archivoFoto").removeAttr("disabled");
        $("#archivoVoluntad").removeAttr("disabled");

        $("#continue1").show();
        $("#continue2").show();
        $("#continue3").show();
        $("#updateNino").show();
        $("#modiNino").hide();
        $("#enviarDocumento").show();
        $("#enviarFotoN").show();
        $("#enviarVoluntad").show();
    });

    //evento que habilita todos los campos de la ficha adultos para hacer actualizaciones
    $('#modiAdulto').click(function () {

        $("#semilleroAdulto").removeAttr("disabled");
        $("#nombresAdulto").removeAttr("disabled");
        $("#apellidosAdulto").removeAttr("disabled");
        $("#sexoAdulto-1").removeAttr("disabled");
        $("#sexoAdulto-2").removeAttr("disabled");
        $("#departamentoNacimientoAdulto").removeAttr("disabled");
        $("#ciudadNacimientoAdulto").removeAttr("disabled");
        $("#fechaNacimientoAdulto").removeAttr("disabled");
        $("#edadAdulto").removeAttr("disabled");
        $("#tipoDocumentoAdulto").removeAttr("disabled");
        $("#documentoAdulto").removeAttr("disabled");
        $("#rhAdulto").removeAttr("disabled");
        $("#tipoSeguridadAdulto").removeAttr("disabled");
        $("#entidadAdulto").removeAttr("disabled");
        $("#telefonoAdulto").removeAttr("disabled");
        $("#ocupacionAdulto").removeAttr("disabled");
        $("#celularAdulto").removeAttr("disabled");
        $("#direccionAdulto").removeAttr("disabled");
        $("#barrioOveredaAdulto").removeAttr("disabled");
        $("#barrioAdulto").removeAttr("disabled");
        $("#emailAdulto").removeAttr("disabled");
        $("#departamentoResidenciaAdulto").removeAttr("disabled");
        $("#ciudadResidenciaAdulto").removeAttr("disabled");
        $("#nivelEscolaridad").removeAttr("disabled");
        $("#estadoEscolaridad").removeAttr("disabled");
        $("#anoIngresoAdulto").removeAttr("disabled");
        $("#anoPermanenciaAdulto").removeAttr("disabled");
        $("#nombresNino").removeAttr("disabled");
        $("#parentezcoNino").removeAttr("disabled");
        $("#programaNino").removeAttr("disabled");
        $("#tipologiaAdulto").removeAttr("disabled");
        $("#discapacidadAdulto").removeAttr("disabled");

        if ($("#nivelEscolaridad").val() === "PROFESIONAL") {

            $("#areaProfesionalizacion").removeAttr("disabled");
        }

        if ($("#discapacidadAdulto").val() === "SI") {
            $("#observacionDiscapaAdulto").removeAttr("disabled");
        }

        $("#desplazadoAdulto").removeAttr("disabled");

        if ($("#desplazadoAdulto").val() === "SI") {
            $("#registroAdulto").removeAttr("disabled");
            $("#victimaAdulto").removeAttr("disabled");
        }

        if ($("#victimaAdulto").val() === "SI") {
            $("#registroVictimaAdulto").removeAttr("disabled");
        }

        $("#discapacidadAdulto").removeAttr("disabled");

        if ($("#discapacidadAdulto").val() === "SI") {
            $("#observacionDiscapaAdulto").removeAttr("disabled");
        }

        $("#etniaAdulto").removeAttr("disabled");
        $("#numeroMiembrosAdulto").removeAttr("disabled");
        $("#ocupacionMiembrosAdulto").removeAttr("disabled");
        $("#empleoFormalAdulto").removeAttr("disabled");
        $("#empleoInformalAdulto").removeAttr("disabled");
        $("#familiarEmpresaAdulto").removeAttr("disabled");

        if ($("#familiarEmpresaAdulto").val() === "SI") {
            $("#companiaAdulto").removeAttr("disabled");
            $("#tipoVinculacionAdulto").removeAttr("disabled");
            $("#nombresFamiliarEmpresaAdulto").removeAttr("disabled");
        }

        $("#archivoDocumentoAdultos").removeAttr("disabled");
        $("#archivoFotoAdultos").removeAttr("disabled");
        $("#archivoVoluntadAdultos").removeAttr("disabled");

        $("#continue1Adulto").show();
        $("#continue2Adulto").show();
        $("#continue3Adulto").show();
        $("#updateAdulto").show();
        $("#modiAdulto").hide();
        $("#enviarDocumentoAdultos").show();
        $("#enviarFotoAdultos").show();
        $("#enviarVoluntadAdultos").show();
    });

    //evento que habilita todos los campos de la ficha voluntarios egresados para hacer actualizaciones
    $('#modiVolunEgres').click(function () {

        $("#semilleroVolunEgres").removeAttr("disabled");
        $("#tipoDocumentoVolunEgres").removeAttr("disabled");
        $("#documentoVolunEgres").removeAttr("disabled");
        $("#nombresVolunEgres").removeAttr("disabled");
        $("#apellidosVolunEgres").removeAttr("disabled");
        $("#sexoVolunEgres-1").removeAttr("disabled");
        $("#sexoVolunEgres-2").removeAttr("disabled");
        $("#departamentoNacimientoVolunEgres").removeAttr("disabled");
        $("#ciudadNacimientoVolunEgres").removeAttr("disabled");
        $("#fechaNacimientoVolunEgres").removeAttr("disabled");
        $("#edadVolunEgres").removeAttr("disabled");
        $("#estadoCivilVolunEgres").removeAttr("disabled");
        $("#numeroHijosVolunEgres").removeAttr("disabled");
        $("#promocionVolunEgres").removeAttr("disabled");
        $("#anoIngresoVolunEgres").removeAttr("disabled");
        $("#anoPermanenciaVolunEgres").removeAttr("disabled");
        $("#departamentoResidenciaVolunEgres").removeAttr("disabled");
        $("#ciudadResidenciaVolunEgres").removeAttr("disabled");
        $("#barrioOveredaVolunEgres").removeAttr("disabled");
        $("#barrioVolunEgres").removeAttr("disabled");
        $("#direccionVolunEgres").removeAttr("disabled");
        $("#telefonoVolunEgres").removeAttr("disabled");
        $("#celularVolunEgres").removeAttr("disabled");
        $("#emailVolunEgres").removeAttr("disabled");
        $("#nivelEscolaridadVolunEgres").removeAttr("disabled");
        $("#estadoEscolaridadVolunEgres").removeAttr("disabled");
        $("#semestreVolunEgres").removeAttr("disabled");
        $("#areaProfesionalizacionVolunEgres").removeAttr("disabled");
        $("#lugarFormacionVolunEgres").removeAttr("disabled");
        $("#trabajaActualmenteVolunEgres").removeAttr("disabled");

        if ($("#trabajaActualmenteVolunEgres").val() === "SI") {
            $("#tipoTrabajoVolunEgres").removeAttr("disabled");
            $("#nombreEmpresaVolunEgres").removeAttr("disabled");
            $("#tipoContratoVolunEgres").removeAttr("disabled");
        }

        $("#archivoDocumentoVolunEgres").removeAttr("disabled");
        $("#archivoFotoVolunEgres").removeAttr("disabled");
        $("#archivoVoluntadVolunEgres").removeAttr("disabled");

        $("#continue1VolunEgres").show();
        $("#updateVolunEgres").show();
        $("#modiVolunEgres").hide();
        $("#enviarDocumentoVolunEgres").show();
        $("#enviarFotoVolunEgres").show();
        $("#enviarVoluntadVolunEgres").show();
    });

    //evento del boton eliminar de la tabla fichas existentes cuando se desea eliminar un registro
    $('#tblRol').on('click', 'a.delete', function () {

        $("#LoadingImage").show();

        var $tr = $(this).closest('tr');
        var rowIndex = $tr.index();
        selectedRow = $('#tblRol tbody tr:eq(' + rowIndex + ')');
        var td = $(selectedRow).children('td');

        var id = $(this).prop('title');
        $.ajax({
            type: "POST",
            url: "../Controller/ctrlFichaSocioFamiliar.php?opcion=6",
            data: {idFicha: id},
            error: function (jqXHR, textStatus, errorThrown) {
                //*Ocurrió un eror en la petición ajax
                $("#LoadingImage").hide();
                console.log(textStatus + "\n" + errorThrown);
            },
            success: function (result) {
                $("#LoadingImage").hide();
                var data = eval('(' + result + ')')

                if (data.res === 'fail') {

                    var modal = $('#exampleconfirmacion');
                    modal.find('.modal-title').text("Confirmación");
                    modal.find('#modal-message').html(data.msg);
                    $('#exampleconfirmacion').modal('show');

                } else if (data.res === 'all') {

                    var modal = $('#exampleconfirmacion');
                    modal.find('.modal-title').text(td[2].innerText + " " + td[3].innerText);
                    modal.find('#modal-message').html("<div style='color: #009d48'>" + data.msg + "</div>");
                    $('#exampleconfirmacion').modal('show');

                    var oTable2 = $('#tblRol').dataTable();
                    oTable2.fnDestroy();
                    tabla();

                    var oTable3 = $('#tblRol2').dataTable();
                    oTable3.fnDestroy();
                    tabla2();
                }
            }
        });
    });

    //evento del boton habilitar de la tabla fichas eliminados cuando se desea volver habilitar un registro eliminado
    $('#tblRol2').on('click', 'a.enable', function () {

        $("#LoadingImage").show();

        var $tr = $(this).closest('tr');
        var rowIndex = $tr.index();
        selectedRow = $('#tblRol2 tbody tr:eq(' + rowIndex + ')');
        var td = $(selectedRow).children('td');

        var id = $(this).prop('title');
        $.ajax({
            type: "POST",
            url: "../Controller/ctrlFichaSocioFamiliar.php?opcion=7",
            data: {idFicha: id},
            error: function (jqXHR, textStatus, errorThrown) {
                //*Ocurrió un eror en la petición ajax
                $("#LoadingImage").hide();
                console.log(textStatus + "\n" + errorThrown);
            },
            success: function (result) {
                $("#LoadingImage").hide();
                var data = eval('(' + result + ')')

                if (data.res === 'fail') {

                    var modal = $('#exampleconfirmacion');
                    modal.find('.modal-title').text("Confirmación");
                    modal.find('#modal-message').html(data.msg);
                    $('#exampleconfirmacion').modal('show');

                } else if (data.res === 'all') {

                    var modal = $('#exampleconfirmacion');
                    modal.find('.modal-title').text(td[2].innerText + " " + td[3].innerText);
                    modal.find('#modal-message').html("<div style='color: #009d48'>" + data.msg + "</div>");
                    $('#exampleconfirmacion').modal('show');

                    var oTable2 = $('#tblRol').dataTable();
                    oTable2.fnDestroy();
                    tabla();

                    var oTable3 = $('#tblRol2').dataTable();
                    oTable3.fnDestroy();
                    tabla2();
                }
            }
        });
    });

});

//consulta para llenar la tabla de los participantes existentes
function tabla() {

    $('#tblRol').dataTable({
        "bProcessing": true,
        "sServerMethod": 'GET',
        "bServerSide": true,
        "bRetrieve": true,
        "info": false,
        "bFilter": true,
        "ordering": true,
        "bAutoWidth": false,
        "bLengthChange": false,
        "bPaginate": true,
        "iDisplayLength": 10,
        "sAjaxSource": "Fichas/consultarDatosTablaFichasTodas.php",
        "order": [[3, "asc"]],
        "aoColumnDefs": [{
                "aTargets": [2],
                "sType": "html"
                , "mRender": function (date, type, full) {
                    return ("" + full[2].toString());
                }
            }],
        "oLanguage": {
            "oPaginate": {
                "sFirst": "Primera",
                "sPrevious": "Anterior",
                "sNext": "Siguiente",
                "sLast": "&Uacute;ltima"
            },
            "sZeroRecords": "No se encontraron registros",
            "sEmptyTable": "No hay registros",
            "sSearch": "B&uacute;squeda R&aacute;pida"
        }
    }).fnSetFilteringDelay(250);
}

//consulta para llenar la tabla de los participantes eliminados
function tabla2() {

    $('#tblRol2').dataTable({
        "bProcessing": true,
        "sServerMethod": 'GET',
        "bServerSide": true,
        "bRetrieve": true,
        "info": false,
        "bFilter": true,
        "ordering": true,
        "bAutoWidth": false,
        "bLengthChange": false,
        "bPaginate": true,
        "iDisplayLength": 10,
        "sAjaxSource": "Fichas/consultarDatosTablaFichasEliminadasTodas.php",
        "order": [[3, "asc"]],
        "aoColumnDefs": [{
                "aTargets": [2],
                "sType": "html"
                , "mRender": function (date, type, full) {
                    return ("" + full[2].toString());
                }
            }],
        "oLanguage": {
            "oPaginate": {
                "sFirst": "Primera",
                "sPrevious": "Anterior",
                "sNext": "Siguiente",
                "sLast": "&Uacute;ltima"
            },
            "sZeroRecords": "No se encontraron registros",
            "sEmptyTable": "No hay registros",
            "sSearch": "B&uacute;squeda R&aacute;pida"
        }
    }).fnSetFilteringDelay(250);
}