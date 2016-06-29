package com.alvin.service;

import java.util.Set;

import com.alvin.mybatis.domain.MyEntity;
import com.alvin.mybatis.domain.User;

public interface UserService {

	    int deleteByPrimaryKey(Long id);

	    int insert(User record);

	    int insertSelective(User record);

	    User selectByPrimaryKey(Long id);

	    int updateByPrimaryKeySelective(User record);

	    int updateByPrimaryKey(User record);
	    
	    User selectByUserName(String name);
	    
	    MyEntity selectMyentityByPrimaryKey(Long id);
	    
	    Set<String> findRoles(String username);
	    
	    Set<String> findPermissions(String username);

}
