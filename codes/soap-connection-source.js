var soapXml =  
'<?xml version="1.0"?>' +
  '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope/"soap:encodingStyle="http://www.w3.org/2003/05/soap-encoding">'+
    //message informations here
'</soap:Envelope> ';
  
  //Connection to webservice
	var url = new java.net.URL("http://localhost:8180/services/soap?wsdl");
	var conn = url.openConnection();
	
  //User credentials for the webservice
	var name = 'username';
	var password = 'password';
	var authString = name + ":" + password;
	var enc = new org.apache.commons.codec.binary.Base64();
	var authStringEncB = enc.encodeBase64(new java.lang.String(authString).getBytes());
	var authStringEnc = new java.lang.String(authStringEncB).toString();
	  conn.setRequestProperty("Authorization", "Basic " + authStringEnc);
	
	// Set the necessary header fields
    conn.setRequestProperty("POST", "http://localhost:8180/services/soap?wsdl");
    conn.setDoOutput(true);
    
	// Send the request
 	var wr = new java.io.OutputStreamWriter(conn.getOutputStream());
    wr.write(soapXml);
    wr.flush();
    
	// Read the response
	var rd = new java.io.BufferedReader(new java.io.InputStreamReader(conn.getInputStream()));
	var line;
	
    while ((line = rd.readLine()) != null) {
      logger.info(line);
    }
