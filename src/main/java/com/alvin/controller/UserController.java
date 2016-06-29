package com.alvin.controller;



import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

//import com.alvin.bussiness.service.UserLoginService;
import com.alvin.mybatis.domain.JsonUser;
import com.alvin.mybatis.domain.User;
import com.alvin.service.UserService;


@Controller
public class UserController {

	@Autowired
	private UserService uServer;
	
//	@Autowired
//	private UserLoginService uLogin;
	
	
	/*** 
     * 跳转到登录页面 
     *  
     * @return 
     */  
    @RequestMapping(value = "toLogin.do")  
    public String toLogin() {  
        // 跳转到/page/login.jsp页面  
        return "login";  
    }  
  
    /*** 
     * 实现用户登录 
     *  
     * @param username 
     * @param password 
     * @return 
     */  
    @RequestMapping(value = "login.do")  
    public ModelAndView Login(User user,ModelAndView mav) {   
    	
        User dbuser = uServer.selectByUserName(user.getUsername());  
        if (dbuser == null) {  
            mav.setViewName("login");  
            mav.addObject("msg", "user didn't exist");  
            return mav;  
        }  
        if (!dbuser.getPassword().equals(user.getPassword())) {  
            mav.setViewName("login");  
            mav.addObject("msg", "user/password incorrect");  
            return mav;  
        }  
        SecurityUtils.getSecurityManager().logout(SecurityUtils.getSubject());  
        // 登录后存放进shiro token  
        UsernamePasswordToken token = new UsernamePasswordToken(user.getUsername(), user.getPassword());  
        Subject subject = SecurityUtils.getSubject();  
        subject.login(token);  
        // 登录成功后会跳转到successUrl配置的链接，不用管下面返回的链接。  
        mav.setViewName("success");
		return mav;  
    }
    
    @RequestMapping("success.do,")  
    public String index() {  
        System.out.println("login success");  
        return "success";  
    }  
	
//	@RequestMapping("/login.do")
//	public String login(User user,Model mv){
////		
//		System.out.println("------"+uServer.selectByPrimaryKey((long)1).toString());
//		
//		System.out.println("--select by name --"+uServer.selectByUserName("starzou"));
//		
//		System.out.println("--select my entity--"+uServer.selectMyentityByPrimaryKey((long)1));
//		System.out.println("---login");
//		System.out.println("user --- "+user);
//		
//		
//		
//		if(uLogin.checkUser(user)){
//			//mv.addObject("user",user);
//			return "success";
//		}else{
////			Message message = new Message();
////			message.setMessage("user name or password wrong");
//			mv.addAttribute("m", "user name or password wrong");
//			return "error";
//		}
//		
//		
//	}
	
	
	@RequestMapping(value="/jsontest.do")	
	@ResponseBody
	public String jsonTset(JsonUser user){
		System.out.println(user.toString());
		return "";
	}
	
}
