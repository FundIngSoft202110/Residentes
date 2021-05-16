/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package CONTROLADORES;

import ENTIDADES.*;
import API.ConexionBD;
import ENTIDADES. *;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/apartamentos")
public class controladorApartamento {
    
    ConexionBD conexion = new ConexionBD();
    Connection con = conexion.conectar();
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Apartamento>getApartamentos(){
        List<Apartamento> apto = new ArrayList<>();
        String consulta = "SELECT * FROM Apartamento ";
        Apartamento a = new Apartamento();
        ApartamentoPK apk = new ApartamentoPK();
         try (
           PreparedStatement statement = this.con.prepareStatement(consulta);
           ResultSet rs = statement.executeQuery();
                 
            ){

          while (rs.next()){
            a = new Apartamento();
            apk = new ApartamentoPK(rs.getInt("IdApartamento"), rs.getInt("ConjuntoIdConjunto"));
            a.setApartamentoPK(apk);
            a.setTorre(rs.getBigDecimal("Torre"));
            a.setPiso(rs.getBigDecimal("Piso"));
            a.setNumero(rs.getBigDecimal("Numero"));
            a.setContrasena(rs.getString("Contrasena"));
            apto.add(a);
          }
           } catch (SQLException sqle) { 
        
          
}        
        
         return apto;
    }
    
    @GET
    @Path("/apartamentos/{AptoConjunto}")
    @Consumes(MediaType.APPLICATION_JSON)
    public int getAptoIngreso(@PathParam("AptoConjunto") Apartamento apartamento ){
         
         String consulta ="SELECT a.IdApartamento, a.Contrasena FROM apartamento a WHERE a.ConjuntoIdConjunto=? AND a.Torre =? AND a.Piso=? AND a.Numero=?";
         try (
           
           PreparedStatement statement = this.con.prepareStatement(consulta);
           ){
   
     
      int conjunto = apartamento.getApartamentoPK().getConjuntoIdConjunto();
      BigDecimal torre = apartamento.getTorre();
      BigDecimal piso = apartamento.getPiso();
      BigDecimal numero = apartamento.getNumero();
      String contrasena = apartamento.getContrasena();
        
      statement.setInt(1, conjunto);
      statement.setBigDecimal(2, torre);
      statement.setBigDecimal(3, piso);
      statement.setBigDecimal(4, numero);
         
      
      try(
                 ResultSet rs = statement.executeQuery();
                 ){
                 int idApto = rs.getInt(1);
                 String contrasena2 = rs.getNString(2);
                 if(!contrasena.equals(contrasena2)){
                     idApto = -1;
                 }
                 return idApto;
      }
         
        }catch(SQLException sqle){
              System.out.println("Error en la ejecución:"  + sqle.getErrorCode() + " " + sqle.getMessage());  
         }
        
       return 0;
    }
    
    
    @GET
    @Path("/apartamentos/{IdConjunto}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Apartamento> getAptosConjunto(@PathParam("IdConjunto") int id ){
        List<Apartamento> apto = new ArrayList<>();
        String consulta = "SELECT * FROM Apartamento AS a WHERE  a.ConjuntoIdConjunto = ?";
        Apartamento a = new Apartamento();
        ApartamentoPK apk = new ApartamentoPK();
         try (
           PreparedStatement statement = this.con.prepareStatement(consulta);
           ResultSet rs = statement.executeQuery();
                 
            ){
          statement.setInt(1, id);
          
          while (rs.next()){
            a = new Apartamento();
            apk = new ApartamentoPK(rs.getInt("IdApartamento"), rs.getInt("ConjuntoIdConjunto"));
            a.setApartamentoPK(apk);
            a.setTorre(rs.getBigDecimal("Torre"));
            a.setPiso(rs.getBigDecimal("Piso"));
            a.setNumero(rs.getBigDecimal("Numero"));
            a.setContrasena(rs.getString("Contrasena"));
            apto.add(a);
          }
           } catch (SQLException sqle) { 
        
           }        
        
         return apto;
        
    }
    
}
