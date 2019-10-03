function setText(){
    var titulo=document.getElementsByName("newtitulo")[0].value;
    var newtitulo="";
    for(var i=0;i<titulo.length;i++){        
        if(titulo[i]=='a'||titulo[i]=='A'){
            //a - > rombo
            newtitulo=newtitulo.concat('&#8900');
        }else if(titulo[i]=='e'||titulo[i]=='E'){
            //e- > pica
            newtitulo=newtitulo.concat('&#9824');
        }else if(titulo[i]=='i'||titulo[i]=='I'){
            //i- > corazon
            newtitulo=newtitulo.concat('&#9829');
        }else if(titulo[i]=='o'||titulo[i]=='O'){
            //o- > cara feliz
            newtitulo=newtitulo.concat(' &#9786');
        }else if(titulo[i]=='u'||titulo[i]=='U'){
            //u- > cara triste
            newtitulo=newtitulo.concat('&#9785');
        }else{
            newtitulo=newtitulo.concat(titulo[i]);
        }

    }
    alert(titulo);
    document.getElementById('titulo').innerHTML=newtitulo;

}
