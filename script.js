function stringParser() {
    document.getElementById("data").innerHTML = "";
    document.getElementById("createCMD").innerHTML = "";
    document.getElementById("grantCMD").innerHTML = "";
    
    var password = document.getElementById("pwd").value;
    var documentInput = document.getElementById("input").value;

    var splitPhase1 = documentInput.split(/ +|\r/);
    splitPhase1.splice(-1,1);
    var dataElements = splitPhase1.length/2;

    document.getElementById("data").innerHTML = splitPhase1 + "<br><br><br># of data element pairs:" + dataElements + "<br><br><br>";

    for (i = 0; i < splitPhase1.length; i = i+2) {
        document.getElementById("createCMD").innerHTML = document.getElementById("createCMD").innerHTML + "CREATE user " + splitPhase1[i] + " profile " + splitPhase1[i+1] + " identified by \"" + password + "\" default tablespace endusers temporary tablespace temporary quota unlimited on endusers account unlock;<br><br>";

        if (splitPhase1[i+1] == "DEVELOPER") {
            document.getElementById("grantCMD").innerHTML = document.getElementById("grantCMD").innerHTML + "GRANT appdeveloper, connect, sse_role to " + splitPhase1[i] + ";<br><br>";
        }
        else {
            document.getElementById("grantCMD").innerHTML = document.getElementById("grantCMD").innerHTML + "GRANT connect, sse_role to " + splitPhase1[i] + ";<br><br>";
        }
    }
}
