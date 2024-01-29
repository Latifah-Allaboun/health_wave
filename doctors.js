        function myFunction1(el) {
            if(el.value == "alphabiticly") {
                var list, i, switching, b, shouldSwitch, n;
          list = document.getElementById("realList");
          switching = true;
          console.log(list)
    
          while (switching) {
            switching = false;
            b  = list.getElementsByTagName("li")
            for (i = 0; i < (b.length - 1); i++) {
              shouldSwitch = false;
              const name = b[i].querySelector("#DrNames").innerHTML.toLowerCase();
              const name2 = b[i + 1].querySelector("#DrNames").innerHTML.toLowerCase();
              if ( name > name2) {
                shouldSwitch = true;
                break;
              }
            }
            if (shouldSwitch) {
              b[i].parentNode.insertBefore(b[i + 1], b[i]);
              switching = true;
            }
          }
            } 
            
            
            else {
                 var list, i, switching, b, shouldSwitch, n;
          list = document.getElementById("realList");
          switching = true;
          console.log(list)
    
          while (switching) {
            switching = false;
            b  = list.getElementsByTagName("li")
            for (i = 0; i < (b.length - 1); i++) {
              shouldSwitch = false;
              const name = b[i].querySelector("#dep").innerHTML.toLowerCase();
              const name2 = b[i + 1].querySelector("#dep").innerHTML.toLowerCase();
              if ( name > name2) {
                shouldSwitch = true;
                break;
              }
            }
            if (shouldSwitch) {
              b[i].parentNode.insertBefore(b[i + 1], b[i]);
              switching = true;
            }
          }
            }
        
        }