<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>

<%@ include file="/WEB-INF/page/common/base.jsp"%>
</head>
<body>

<!-- 
<form action="login.do">

   User Name : <input type="text" name="username"><br>
   Password : <input type="text" name="password"><br>
   <button type="submit">Submit</button>
</form>
 -->

<form class="form-horizontal" action="login.do" style="margin-top: 240px;margin-left: 340px;">
<p>  
${msg }
</p>
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">User Name:</label>
    <div class="col-xs-4">
      <input type="text" class="form-control" id="username" name="username" >
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Password :</label>
    <div class="col-xs-4">
      <input type="password" class="form-control" id="password" name="password" >
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> Remember me
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">Sign in</button>
    </div>
  </div>
</form>
</body>
</html>