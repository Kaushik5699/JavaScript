function sayHello()
                   {
                       alert("Hello World")
                   }
               
                   function WriteCookie()
            {
               if( document.myform.customer.value == "" ){
                  alert("Enter some value!");
                  return;
               }
               cookievalue= escape(document.myform.customer.value) + ";";
               document.cookie="name=" + cookievalue;
               document.write ("Setting Cookies : " + "name=" + cookievalue );
               ReadCookie();
            }
            function redirect()
            {
                window.location="https://www.google.com";
            }
            function notification()
            {   var info=prompt("Enter your name here:","")
            document.write(info)
                   var retval = confirm("Do you want to continue ?")
                if(retval==true)
                {
                    document.write(" you will be redirected to another website in 10 seconds")
                setTimeout('redirect()',10000)    
                }
                else{
                    document.write("User declined")
                }
                for(var i=0;i<10;i++)
                var browsername = navigator.appName;
                document.write(browsername)
            }
            function validate()
            {
                if( document.myForm.Name.value == "" )
         {
            alert( "Please provide your name!" );
            document.myForm.Name.focus() ;
            return false;
         }
         
         if( document.myForm.EMail.value == "" )
         {
            alert( "Please provide your Email!" );
            
            document.myForm.EMail.focus() ;
            return false;
         }
         var emailID = document.myForm.EMail.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) 
         {
            alert("Please enter correct email ID")
            document.myForm.EMail.focus() ;
            return false;
         }
         if(document.myForm.Zip.value=="" || isNaN(document.myForm.Zip.value) || document.myForm.Zip.value.length !=6)
         {
             alert("Please provide a valid zipcode")
             document.myForm.Zip.focus();
             return false;
         }
         if(document.myForm.Country.value=="-1")
         {
            alert("Please choose a valid option as your country")
            document.myForm.country.focus(); 
             return false;
         }
         return (true);
            }
            function ReadCookie()
            {
                /*var allcookies = document.cookie;
                document.write("All cookies : " +allcookies);
                cookiearray = allcookies.split(';');
                for(var i=0;i<cookiearray.length;i++)
                {
                    name=cookiearray[i].split('=')[0];
                    value=cookiearray[i].split('=')[1];
                    document.write("Key is "+name+ "and value is "+value);
                }*/
                var allcookies = document.cookie;
               document.write ("All Cookies : " + allcookies );
               
               // Get all the cookies pairs in an array
               cookiearray = allcookies.split(';');
               
               // Now take key value pair out of this array
               for(var i=0; i<cookiearray.length; i++){
                  name = cookiearray[i].split('=')[0];
                  value = cookiearray[i].split('=')[1];
                  document.write ("Key is : " + name + " and Value is : " + value);
            }
            var imgobj=null;
            function init()
            {
                imgobj = document.getElementById('img1');
                imgobj.style.position = 'relative';
                imgobj.style.left='0px';
                
            }
            function moveright()
            {
                imgobj.style.left = parseInt(imgobj.style.left) + 10 + 'px';
            }
            window.onload=init;
            }
