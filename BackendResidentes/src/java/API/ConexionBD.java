/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package API;

import CONTROLADORES.controladorPersona;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;




public class ConexionBD {
                               
    public static final String sURL = "jdbc:mysql://localhost:3306/residentes?zeroDateTimeBehavior=convertToNull&useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC&autoReconnect=true&useSSL=false"; 
    public static final String  usuario= "alejo23";
    public static final String password ="Ma123456789";
    public static final String driver= "com.mysql.jdbc.Driver";
    
    
    public ConexionBD(){
    }
    
    public Connection conectar(){
    Connection con= null;
        try {
            con = DriverManager.getConnection(sURL, usuario, password);
        } catch (SQLException ex) {
            Logger.getLogger(ConexionBD.class.getName()).log(Level.SEVERE, null, ex);
        }
    return con;
    }
 
    
}
