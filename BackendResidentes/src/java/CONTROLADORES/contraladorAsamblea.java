/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import API.ConexionBD;
import ENTIDADES.Asamblea;
import ENTIDADES.AsambleaPK;
import ENTIDADES.DTOresultadoVoto;
import ENTIDADES.DTOopcion;
import ENTIDADES.DTOpropuesta;
import ENTIDADES.DTOrespuestas;
import ENTIDADES.Opcion;
import ENTIDADES.OpcionPK;
import ENTIDADES.Persona;
import ENTIDADES.Propuesta;
import ENTIDADES.ResultadoVoto;
import ENTIDADES.Votacion;
import ENTIDADES.VotacionProxy;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/asambleas")
public class contraladorAsamblea {
    ConexionBD conexion = new ConexionBD();
    Connection con = conexion.conectar();

    @GET
    @Path("/{idConjunto}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Asamblea> getAsambleasConjunto(@PathParam("idConjunto") int id) {
        List<Asamblea> asambleas = new ArrayList<>();
        Asamblea asamblea;
        AsambleaPK asambleaPK;
        String consulta = "SELECT a.IdAsamblea, a.Tema, a.Fecha, a.Hora, a.estado "
                        + "FROM Asamblea a "
                        + "WHERE a.ConjuntoIdConjunto = ? ";
        try (
           PreparedStatement statement = this.con.prepareStatement(consulta);){
           statement.setInt(1, id);
           try(
           ResultSet rs = statement.executeQuery();
            ){
            while (rs.next()){
              asamblea = new Asamblea(); 
              asambleaPK = new AsambleaPK();
              asambleaPK.setIdAsamblea(rs.getInt("IdAsamblea"));
              asamblea.setAsambleaPK(asambleaPK);
              asamblea.setTema(rs.getString("Tema"));
              asamblea.setEstado(rs.getString("estado"));
              asamblea.setFecha(rs.getBigDecimal("Fecha"));
              asamblea.setHora(rs.getBigDecimal("Hora"));
              asambleas.add(asamblea);
            } // end while
           }
        } catch (SQLException sqle) { 
            System.out.println("Error");
        }        
        return asambleas;
    } // end getAsambleasConjunto
    
    @GET
    @Path("/mostrarPropuestas/{idConjunto}/{idApto}/{idAsamblea}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<DTOpropuesta> mostrarPropuestas(@PathParam("idConjunto") int idConjunto, @PathParam("idApto") int idApto, @PathParam("idAsamblea") int idAsamblea) {
        List<DTOpropuesta> propuestas = new ArrayList<>();
        DTOpropuesta propuesta;
        String consulta = "SELECT p.IdPropuesta, p.Descripcion, p.Estado "
                        + "FROM Propuesta p "
                        + "WHERE p.AsambleaConjuntoIdConjunto = ? AND p.AsambleaIdAsamblea = ?; ";
        String consulta2 = "SELECT o.IdOpcion, o.Nombre "
                        + "FROM Opcion o "
                        + "WHERE o.PropuestaIdPropuesta = ?; ";
        String consulta3 = "SELECT v.ApartamentoIdApartamento "
                        + "FROM Voto v "
                        + "WHERE v.ApartamentoIdApartamento = ? AND v.ApartamentoConjuntoIdConjunto = ? AND v.OpcionPropuestaIdPropuesta = ?; ";
        
        try (
           PreparedStatement statement = this.con.prepareStatement(consulta);){
           statement.setInt(1, idConjunto);
           statement.setInt(2, idAsamblea);
           try(
           ResultSet rs = statement.executeQuery();
            ){
                while (rs.next()){
                  propuesta = new DTOpropuesta();
                  propuesta.setIdPropuesta(rs.getInt("IdPropuesta"));
                  propuesta.setDescripcion(rs.getString("Descripcion"));
                  propuesta.setEstado(rs.getString("Estado"));
                  propuestas.add(propuesta);
                } // end while
            }
            for (Iterator<DTOpropuesta> it = propuestas.iterator(); it.hasNext();) {
                DTOpropuesta propuestaIt = it.next();
                DTOopcion opcion;
                List<DTOopcion> opcionesAux = new ArrayList<>();
                try(
                PreparedStatement statement2 = this.con.prepareStatement(consulta2);){
                statement2.setInt(1, propuestaIt.getIdPropuesta());
                    try(ResultSet rs2 = statement2.executeQuery();){
                        while(rs2.next()){
                            opcion = new DTOopcion();
                            opcion.setIdOpcion(rs2.getInt("IdOpcion"));
                            opcion.setNombre(rs2.getString("Nombre"));
                            opcionesAux.add(opcion);
                        }
                        propuestaIt.setOpciones(opcionesAux);
                    }
                }
                if("Disponible".equals(propuestaIt.getEstado())){
                    try(
                    PreparedStatement statement3 = this.con.prepareStatement(consulta3);){
                        statement3.setInt(1, idApto);
                        statement3.setInt(2, idConjunto);
                        statement3.setInt(3, propuestaIt.getIdPropuesta());
                        try(ResultSet rs3 = statement3.executeQuery();){
                            while(rs3.next()){
                                propuestaIt.setEstado("Bloqueado");
                            }

                        }
                    }
                } // end if
            } // end for
        } catch (SQLException sqle) { 
            System.out.println("Error");
        }        
        return propuestas;
    }
    
    @GET
    @Path("/resultadosVotos/{idConjunto}/{idAsamblea}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<DTOresultadoVoto> verResultados(@PathParam("idConjunto") int idConjunto, @PathParam("idAsamblea") int idAsamblea) {
        List<DTOresultadoVoto> resultados = new ArrayList<>();
        List<Propuesta> propuestas = new ArrayList<>();
        ResultadoVoto resultadoVoto = null;
        DTOresultadoVoto dtoResult = null;
        Propuesta propuesta;
        String consulta = "SELECT p.IdPropuesta, p.Descripcion, p.VotosTotales, p.Estado "
                        + "FROM Propuesta as p "
                        + "WHERE p.AsambleaConjuntoIdConjunto = ? AND p.AsambleaIdAsamblea =?";
        try (
           PreparedStatement statement = this.con.prepareStatement(consulta);){
           statement.setInt(1, idConjunto);
           statement.setInt(2, idAsamblea);
           try(
           ResultSet rs = statement.executeQuery();
            ){
            while (rs.next()){
                propuesta = new Propuesta();
                propuesta.setIdPropuesta(rs.getInt("IdPropuesta"));
                propuesta.setDescripcion(rs.getString("Descripcion"));
                propuesta.setVotosTotales(rs.getInt("VotosTotales"));
                propuesta.setEstado(rs.getString("Estado"));
                propuestas.add(propuesta);
            } // end while
           }
           for(Propuesta prop : propuestas){
                if("Resultados".equals(prop.getEstado()))
                    resultadoVoto = new Votacion();
                else
                    resultadoVoto = new VotacionProxy();
                dtoResult = resultadoVoto.resultadosVotos(prop);
                resultados.add(dtoResult);
           }
        } catch (SQLException sqle) { 
            System.out.println("Error");
        }
        return resultados;
    } // end verResultados
    
    @PUT
    @Path("/votar/{idConjunto}/{idApto}/{idPropuesta}/{idOpcion}")
    @Produces(MediaType.APPLICATION_JSON)
    public DTOrespuestas votar(@PathParam("idConjunto") int idConjunto, @PathParam("idApto") int idApto, @PathParam("idPropuesta") int idPropuesta, @PathParam("idOpcion") int idOpcion) {
        String consulta = "UPDATE Propuesta SET VotosTotales = VotosTotales + 1 WHERE IdPropuesta = ?;";
        String consulta2 = "UPDATE Opcion SET CantidadVotos = CantidadVotos + 1 WHERE PropuestaIdPropuesta = ? AND IdOpcion = ?;";
        String consulta3 = "INSERT INTO Voto (ApartamentoIdApartamento, ApartamentoConjuntoIdConjunto, OpcionIdOpcion, OpcionPropuestaIdPropuesta) VALUES (?,?,?,?)";
        DTOrespuestas res = new DTOrespuestas();
        try (
            PreparedStatement statement = this.con.prepareStatement(consulta);
            PreparedStatement statement2 = this.con.prepareStatement(consulta2);
            PreparedStatement statement3 = this.con.prepareStatement(consulta3);) {
                statement.setInt(1, idPropuesta);
                statement2.setInt(1, idPropuesta);
                statement2.setInt(2, idOpcion);
                statement3.setInt(1, idApto);
                statement3.setInt(2, idConjunto);
                statement3.setInt(3, idOpcion);
                statement3.setInt(4, idPropuesta);
                statement.executeUpdate();
                statement2.executeUpdate();
                statement3.executeUpdate();
                res.setRespuesta("Voto cargado");
                return res;
        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución: " + sqle.getErrorCode() + " " + sqle.getMessage());
        }
        res.setRespuesta("Error modificando");
        return res;
    } // end votar
    
    public DTOrespuestas calcularGanador(int idPropuesta) {
        String consulta = "SELECT IdOpcion, CantidadVotos FROM Opcion WHERE PropuestaIdPropuesta = ?";
        String consulta2 = "INSERT INTO Gandador(OpcionPropuestaIdPropuesta, OpcionIdOpcion) VALUES(?,?);";
        List<Opcion> opciones = new ArrayList<>();
        List<Opcion> opcionesGanadoras = new ArrayList<>();
        Opcion opcion = null;
        OpcionPK opci;
        int maximo = 0;
        DTOrespuestas res = new DTOrespuestas();
        try (
            PreparedStatement statement = this.con.prepareStatement(consulta);) {
                statement.setInt(1, idPropuesta);
                try(
                    ResultSet rs = statement.executeQuery();
                ){
                    while(rs.next()){
                        opcion = new Opcion();
                        opci = new OpcionPK();
                        opci.setIdOpcion(rs.getInt("IdOpcion"));
                        opcion.setOpcionPK(opci);
                        opcion.setCantidadVotos(rs.getInt("CantidadVotos"));
                        opciones.add(opcion);
                    }
                }
                for(Opcion opc:opciones){
                    if(opc.getCantidadVotos() > maximo){
                        opcionesGanadoras.clear();
                        maximo = opc.getCantidadVotos();
                        opcionesGanadoras.add(opc);
                    }else if(opc.getCantidadVotos() == maximo){
                        opcionesGanadoras.add(opc);
                    } // end if
                } // end for
                for(Opcion opc:opcionesGanadoras){
                    try(PreparedStatement statement2 = this.con.prepareStatement(consulta2);){
                        statement2.setInt(1, idPropuesta);
                        statement2.setInt(2, opc.getOpcionPK().getIdOpcion());
                        statement2.executeUpdate();
                    }
                } // end for
                res.setRespuesta("Ganador cargado");
                return res;
        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución: " + sqle.getErrorCode() + " " + sqle.getMessage());
        }
        res.setRespuesta("Error modificando");
        return res;
    } // end calcularGanador
    
    @PUT
    @Path("/pararVotacion/{idPropuesta}")
    @Produces(MediaType.APPLICATION_JSON)
    public DTOrespuestas paraVotacion(@PathParam("idPropuesta") int idPropuesta) {
        String consulta = "UPDATE Propuesta SET Estado = 'Bloqueado' WHERE IdPropuesta = ?;";
        DTOrespuestas res = new DTOrespuestas();
        try (
            PreparedStatement statement = this.con.prepareStatement(consulta);) {
                statement.setInt(1, idPropuesta);
                statement.executeUpdate();
                res.setRespuesta("Votacion detenida");
                return res;
        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución: " + sqle.getErrorCode() + " " + sqle.getMessage());
        }
        res.setRespuesta("Error modificando");
        return res;
    } // end paraVotacion
    
    @PUT
    @Path("/subirResultados/{idPropuesta}")
    @Produces(MediaType.APPLICATION_JSON)
    public DTOrespuestas subirResultados(@PathParam("idPropuesta") int idPropuesta) {
        String consulta = "UPDATE Propuesta SET Estado = 'Resultados' WHERE IdPropuesta = ?;";
        DTOrespuestas res = new DTOrespuestas();
        try (
            PreparedStatement statement = this.con.prepareStatement(consulta);) {
                statement.setInt(1, idPropuesta);
                statement.executeUpdate();
                res = this.calcularGanador(idPropuesta);
                return res;
        } catch (SQLException sqle) {
            System.out.println("Error en la ejecución: " + sqle.getErrorCode() + " " + sqle.getMessage());
        }
        res.setRespuesta("Error modificando");
        return res;
    } // end subirResultados
    
} // end contraladorAsamblea
