package com.alvin.mybatis.dao;

import java.util.List;

import com.alvin.mybatis.domain.UserRole;

public interface UserRoleMapper {
    int insert(UserRole record);

    int insertSelective(UserRole record);
    
    List<UserRole> selectByUserId(Integer userId);
}