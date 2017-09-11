export default {
	ChangeDateFormat:cellval => {  
	    var date = new Date(parseInt(cellval.replace("/Date(", "").replace(")/", ""), 10));  
	    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;  
	    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();  
	    return date.getFullYear() + "-" + month + "-" + currentDate;  
	},
	ConvertDate:jsondate => { 
		var date = new Date(parseInt(jsondate.replace("/Date(", "").replace(")/", ""), 10)); 
		return date;
	}
}