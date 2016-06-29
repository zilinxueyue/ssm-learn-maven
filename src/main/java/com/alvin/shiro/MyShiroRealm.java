package com.alvin.shiro;

import java.util.ArrayList;
import java.util.List;  

import org.apache.shiro.authc.AuthenticationException;  
import org.apache.shiro.authc.AuthenticationInfo;  
import org.apache.shiro.authc.AuthenticationToken;  
import org.apache.shiro.authc.SimpleAuthenticationInfo;  
import org.apache.shiro.authc.UsernamePasswordToken;  
import org.apache.shiro.authz.AuthorizationInfo;  
import org.apache.shiro.authz.SimpleAuthorizationInfo;  
import org.apache.shiro.realm.AuthorizingRealm;  
import org.apache.shiro.subject.PrincipalCollection;  

  
/**** 
 * 自定义Realm 
 *  
 * @author Swinglife 
 *  
 */  
public class MyShiroRealm extends AuthorizingRealm {  
  
    /*** 
     * 获取授权信息 
     */  
    @Override  
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection pc) {  
        //根据自己系统规则的需要编写获取授权信息，这里为了快速入门只获取了用户对应角色的资源url信息  
        String username = "Alvin";  
        if (username != null) {  
            List<String> pers = new ArrayList<String>();
            pers.add("USER");
            pers.add("ADMIN");
            if (pers != null && !pers.isEmpty()) {  
                SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();  
                for (String each : pers) {  
                    //将权限资源添加到用户信息中  
                    info.addStringPermission(each);  
                }  
                return info;  
            }  
        }  
        return null;  
    }  
    /*** 
     * 获取认证信息 
     */  
    @Override  
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken at) throws AuthenticationException {  
        UsernamePasswordToken token = (UsernamePasswordToken) at;  
        // 通过表单接收的用户名  
        String username = token.getUsername();  
        if (username != null && !"".equals(username)) {  
//            User user = accountService.getUserByUserName(username);  
//            if (user != null) {  
                return new SimpleAuthenticationInfo("Alvin", "123456", getName());  
//            }  
        }  
  
        return null;  
    }  
      
  
  
}  
