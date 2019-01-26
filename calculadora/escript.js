function insert(num){

	document.form.textview.value = document.form.textview.value + num;

}

function equal(){

	 var soma = document.form.textview.value;

	 if(soma){

	 	document.form.textview.value=eval(soma);

	 }


}

function clean(){

	document.form.textview.value="";

}


function apagar(){
    var soma=document.form.textview.value;
	document.form.textview.value=soma.substring(0,soma.lenght-1);


}