/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

/**
 *
 * @author Ada Maria
 */
public class VotacionProxy extends ResultadoVoto {

    public VotacionProxy() {
    }

    @Override
    public DTOresultadoVoto resultadosVotos(Propuesta propuesta) {
        DTOresultadoVoto result = new DTOresultadoVoto();
        result.setRes("No hay resultados disponibles");
        result.setCantVotos(0);
        result.setPropuesta(propuesta.getDescripcion());
        result.setGanador("");
        return result;
    }
    
}
