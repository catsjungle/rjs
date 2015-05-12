define(['a'],function(modA){

	var m = 3;
	var num = modA(m , m);
	function muti(a, b){
		return a*b;
	}

	var json = {
		num: modA(m, m),
		fun: muti
	}

	return json;
});
