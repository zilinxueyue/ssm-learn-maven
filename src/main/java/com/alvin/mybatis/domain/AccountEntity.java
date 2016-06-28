package com.alvin.mybatis.domain;

import java.util.Date;

public class AccountEntity {

//	private Long id;
	
	private Long user_id;
	
	private Long role_id;


    private String username;

    private String password;

    private String state;

    private Date createTime;

//	public Long getId() {
//		return id;
//	}
//
//	public void setId(Long id) {
//		this.id = id;
//	}

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	public Long getRole_id() {
		return role_id;
	}

	public void setRole_id(Long role_id) {
		this.role_id = role_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	@Override
	public String toString() {
		return "MyEntity [ user_id=" + user_id + ", role_id=" + role_id + ", username=" + username
				+ ", password=" + password + ", state=" + state + ", createTime=" + createTime + "]";
	}
    
    
	
}
