package com.alvin.mybatis.dao;

import com.alvin.mybatis.domain.MyEntity;

public interface MyMapper {

	 MyEntity selectMyentityByPrimaryKey(Long id);
	
}
