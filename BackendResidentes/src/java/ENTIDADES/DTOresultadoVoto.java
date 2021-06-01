/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ENTIDADES;

import java.util.List;

/**
 *
 * @author Ada Maria
 */
public class DTOresultadoVoto {
    
    private String propuesta;
    private int cantVotos;
    private String ganador;
    private String res;

    public DTOresultadoVoto() {
    }

    public DTOresultadoVoto(String propuesta, int cantVotos, String ganador, String res) {
        this.propuesta = propuesta;
        this.cantVotos = cantVotos;
        this.ganador = ganador;
        this.res = res;
    }

    public String getPropuesta() {
        return propuesta;
    }

    public void setPropuesta(String propuesta) {
        this.propuesta = propuesta;
    }

    public int getCantVotos() {
        return cantVotos;
    }

    public void setCantVotos(int cantVotos) {
        this.cantVotos = cantVotos;
    }

    public String getGanador() {
        return ganador;
    }

    public void setGanador(String ganador) {
        this.ganador = ganador;
    }

    public String getRes() {
        return res;
    }

    public void setRes(String res) {
        this.res = res;
    }
    
} // end DTOasamblea
