function Square() {
	var a=document.formaSquare.t1.value;
	if (a > 0){
		var S=a*a;
		console.log(S);
	}
	else {
	console.log("!!!Ошибка!!!")}
}	

function Simple() {
	var M = parseInt(document.formaSimple.M.value)
	var N = parseInt(document.formaSimple.N.value)
	var k = 0
	var b = 0
	M = Math.abs(M)
	N = Math.abs(N)
	if (M == 1){
		M++
	}
	for (var i = M; i <= N; i++) {
		for (var j = 2; j <= i - 1; j++){
			if (i % j == 0){
				k++
			}
		}	
		if (k == 0){
			b++
		}
		k = 0;
	}
	
	console.log(b);
}

function Mata(){
	var a=document.formaMatt.Mat.value;
	var arr = new Array();
	var arr1 = new Array();
	var k=0;
	for(var i=0; i<a; i++){
		arr[i] = new Array();
		for(var j=0; j<a; j++){
			arr[i][j] = (Math.random() * 100);
			k = k+arr[i][j];
		}
	}
   console.log(arr);
   k = k/(a*a);
   for(var v=0; v<a; v++){
	   arr1[v] = new Array();
		for(var x=0; x<a; x++){
		arr1[v][x] = arr[v][x]-k ;
		}
   }
   console.log(arr1);
}

function getArray() {
	var n=parseInt(document.formaSnake.na.value);
	var min=parseInt(document.formaSnake.min.value);
	var max=parseInt(document.formaSnake.max.value);
	var arr = new Array();
	for(var i=0; i<n; i++){
		arr[i] = getRandomInt(min, max);
	}
	console.log(arr);
	getResultArray(arr,n);
}

function getRandomInt(min,max) {
	return (min - 0.5 + Math.random()*(max - min));
}

function getResultArray(arr1, m) {
	for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr1.length - i + 1; j++) {
            if (arr1[j] > arr1[j + 1]) {
                var swap = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = swap;
            }
        }
    }
    console.log(arr1);	
	if ((Math.round(Math.sqrt(m))==Math.sqrt(m)) &&  (Math.sqrt(m) % 2 == 0)){
		var x = Math.sqrt(m);
		getMatrix(arr1, x);
	}
	else {
		console.log('!!!НЕВОЗМОЖНО ПОСТРОИТЬ МАТРИЦУ!!!');
	}
}

function getMatrix(arrpro, x){
	var arra = new Array();
	var k = 0;
	var i = x-1;
	var j;
	while (k<x*x)
	{
		arra[i] = new Array();
		for(j=0; j<x; j++){
			arra[i][j] = arrpro[k];
			k++;
		}
		i = i-1;
		arra[i] = new Array();
		for( j=x-1; j>-1; j--)
		{
			arra[i][j] = arrpro[k];
			k++;
		}
		i = i-1;
	}
	console.log(arra);
	table = document.createElement("TABLE") 
	tableBody = document.createElement("TBODY") 
	table.appendChild(tableBody) 
	for (i = 0; i < x; i++) { 
		tr = document.createElement("TR") 

		tableBody.appendChild(tr); 
		for (j = 0; j < x; j++) { 
			td = document.createElement("TD") 
			td.innerHTML = arra[i][j]; 
			tr.appendChild(td) 
		} 
	} 
	document.body.appendChild(table)	
}	
	