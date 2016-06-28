package com.alvin.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alvin.bussiness.service.UserLoginService;
import com.alvin.mybatis.domain.JsonUser;
import com.alvin.mybatis.domain.User;
import com.alvin.service.UserService;
import com.sun.javafx.collections.MappingChange.Map;

import sun.security.ssl.HandshakeMessage;

@Controller
public class UserController {

	@Autowired
	private UserService uServer;
	
	@Autowired
	private UserLoginService uLogin;
	
	@RequestMapping("/login.do")
	public String login(User user,Model mv){
//		
		System.out.println("------"+uServer.selectByPrimaryKey((long)1).toString());
		
		System.out.println("--select by name --"+uServer.selectByUserName("starzou"));
		
		System.out.println("--select my entity--"+uServer.selectMyentityByPrimaryKey((long)1));
		System.out.println("---login");
		System.out.println("user --- "+user);
		
		
		
		if(uLogin.checkUser(user)){
			//mv.addObject("user",user);
			return "success";
		}else{
//			Message message = new Message();
//			message.setMessage("user name or password wrong");
			mv.addAttribute("m", "user name or password wrong");
			return "error";
		}
		
		
	}
	
	
	@RequestMapping(value="/jsontest.do")	
	@ResponseBody
	public String jsonTset(JsonUser user){
		System.out.println(user.toString());
		return "";
	}
	
}
