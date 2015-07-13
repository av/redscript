![Red Script](http://img42.com/CvCSa+ "RedScript")

RedScript is language (actually don't) that transpiles to JavaScript.
This code is created with the help of [your-script](https://github.com/iamfrontender/your-script) module.

The source files in RedScript have `.rs` extension.

## Disclaimer
This module is created just for enormous incredible fun, nothing more. I can't even imagine someone really writing programms on this subset.

## Usage
This module is distributed via npm, it requires global installation, run `npm i -g rscript` just where you want this code.
RedScript provides minimal console tool to translate source files to JavaScript and vice versa.
After installed globally it availble in your wd as `redscript`

Run `redscript yourFile.js` or `redscript yourFile.rs` to translate it to opposite subset.

## Example

Lets imagine, your JS file, `programm.js` contains following code:
```javascript
    function функ(икс, игрек, зет) {                         
    var и = 0;                              
    var икс = {0: "ноль", 1: "один"};          
    var функ = function () {                  
    }                                          
    if (!и > 10) {                           
        for (var j = 0; j < 10; j++) {      
            switch (j) {                
                case 0:                   
                    значение = "zero";            
                    break;                      
                case 1:                   
                    значение = "one";             
                    break;                      
            }                                  
            var с = джей > 5 ? "ГТ 5" : "ЛЕ 5";
        }                                      
    } else {                                  
        var джей = 0;                          
        try {                             
            while (джей < 10) {                    
                if (и == джей || джей > 5) {       
                    a[джей] = и + джей * 12;         
                }                              
                и = (джей << 2) & 4;              
                джей++;                           
            }                                  
            do {                            
                джей--;                           
            } while (джей > 0)                     
        } catch (e) {                           
            alert("Крах: " + e.message);    
        } finally {                              
            обнулить(a, и);                       
        }                                      
    }                                          
}                                   
```

After launching `redscript programm.js` in directory with this file, parser will create transpiled source file, `programm.rs`, translated in RedScript and look as following:

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

## What it is and what isn't

Since RedScript is based on your-scipt, this subset is limited by modifying the language keywords. So, any global object properties, like `document.body` or `HTMLElement.prototype.nextElementSibling` are untouched, though it's definetely possible :)

## Under the hood

[your-script](https://github.com/iamfrontender/your-script)
[esprima-custom-keywords](https://github.com/iamfrontender/esprima-custom-keywords)
[keywords-provider](https://github.com/iamfrontender/keywords-provider)

Cheers!
