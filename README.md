![Red Script](http://img42.com/CvCSa+ "Optional title")

### Russian JavaScript Subset

RedScript is language (actually don't) that transpiles to JavaScript.

### RedScript programm example
```javascript
функция функ(икс, игрек, зет) {                         
    примем и = 0;                              
    примем икс = {0: "ноль", 1: "один"};          
    примем функ = функция () {                  
    }                                          
    если (!и > 10) {                           
        для (примем j = 0; j < 10; j++) {      
            переключатель (j) {                
                положение 0:                   
                    значение = "zero";            
                    стоп;                      
                положение 1:                   
                    значение = "one";             
                    стоп;                      
            }                                  
            примем с = джей > 5 ? "ГТ 5" : "ЛЕ 5";
        }                                      
    } иначе {                                  
        примем джей = 0;                          
        попробуй {                             
            пока (джей < 10) {                    
                если (и == джей || джей > 5) {       
                    a[джей] = и + джей * 12;         
                }                              
                и = (джей << 2) & 4;              
                джей++;                           
            }                                  
            делай {                            
                джей--;                           
            } пока (джей > 0)                     
        } лови (e) {                           
            alert("Крах: " + e.message);    
        } затем {                              
            обнулить(a, и);                       
        }                                      
    }                                          
}                                              
```
## Usage

Run `npm i rscript` to install.

Require it where needed and pass RedScript source through it to receive transpiled JavaScript code.
```javascript
var redscript = require('rscript');
var parsedSource = redscript(sourceToParse);
```
