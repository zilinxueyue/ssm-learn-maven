package com.alvin.mybatis.dao;

import com.alvin.mybatis.domain.Permission;

public interface PermissionMapper {
    int insert(Permission record);

    int insertSelective(Permission record);
}