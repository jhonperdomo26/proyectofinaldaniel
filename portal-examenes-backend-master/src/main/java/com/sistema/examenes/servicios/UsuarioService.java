package com.sistema.examenes.servicios;

import com.sistema.examenes.modelo.Usuario;
import com.sistema.examenes.modelo.UsuarioRol;
import com.sistema.examenes.repositorios.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;
import java.util.Set;

public interface UsuarioService {


     public List<Usuario> getAllUsers();

     public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception;

    public Usuario obtenerUsuario(String username);

    Usuario actualizarUsuario(Usuario usuario, Long usuarioId) throws Exception;

    public void eliminarUsuario(Long usuarioId) ;
}
