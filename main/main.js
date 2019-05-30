module.exports = function main(num) {
	var a = [['._.','|.|','|_|'],
	['...','..|','..|'],
	['._.','._|','|_.'],
	['._.','._|','._|'],
	['...','|_|','..|'],
	['._.','|_.','._|'],
	['._.','|_.','|_|'],
	['._.','..|','..|'],
	['._.','|_|','|_|'],
	['._.','|_|','..|']];
	
    console.log("Debug Info");
	var s = [];
	for(var i =0;i<num.length;i++){
		var m = parseInt(num[i]);
		s.push(a[m]);
	}
	
	var changes=[];
	for(var i =0;i<s[0].length;i++){
		
			changes[i]=[];
		
	}
	for(var i =0;i<s[0].length;i++){
		for(var j= 0;j<s.length;j++){
			changes[i].push(s[j][i]);
		}		
	}

    var str1= [];		
	for(var i=0;i<changes.length;i++){
		str1.push(changes[i].join(' '));	
	}	
	
	var str2;
	str2 = String(str1[0]+'\n'+str1[1]+'\n'+str1[2]+'\n');
	return str2;
};