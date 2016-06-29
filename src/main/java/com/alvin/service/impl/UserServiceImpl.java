package com.alvin.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alvin.mybatis.dao.MyMapper;
import com.alvin.mybatis.dao.UserMapper;
import com.alvin.mybatis.domain.MyEntity;
import com.alvin.mybatis.domain.User;
import com.alvin.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserMapper userMapper;
	
	@Autowired
	private MyMapper myMapper;

	public int deleteByPrimaryKey(Long id) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int insert(User record) {
		// TODO Auto-generated method stub
		return 0;
	}

	public int insertSelective(User record) {
		// TODO Auto-generated method stub
		return 0;
	}

	public User selectByPrimaryKey(Long id) {
		// TODO Auto-generated method stub
		return userMapper.selectByPrimaryKey(id);
	}

	
	public int updateByPrimaryKeySelective(User record) {
		// TODO Auto-generated method stub
		userMapper.updateByPrimaryKeySelective(record);
		return 0;
	}

	
	public int updateByPrimaryKey(User record) {
		// TODO Auto-generated method stub
		userMapper.updateByPrimaryKey(record);
		return 0;
	}

	
	public User selectByUserName(String username) {
		// TODO Auto-generated method stub
		return userMapper.selectByUserName(username);
	}

	
	public MyEntity selectMyentityByPrimaryKey(Long id) {
		// TODO Auto-generated method stub
		return myMapper.selectMyentityByPrimaryKey(id);
	}

	public Set<String> findRoles(String username) {
		// TODO Auto-generated method stub
		return null;
	}

	public Set<String> findPermissions(String username) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
}
