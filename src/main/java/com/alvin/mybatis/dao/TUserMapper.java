package com.alvin.mybatis.dao;

import com.alvin.mybatis.domain.TUser;

public interface TUserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TUser record);

    int insertSelective(TUser record);

    TUser selectByPrimaryKey(Integer id);
    
    TUser selectByUserName(String username);

    int updateByPrimaryKeySelective(TUser record);

    int updateByPrimaryKey(TUser record);
}