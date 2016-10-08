window.onload=function () {
	function Init(id){
		this.box = document.querySelector(id);
		this.btns = this.box.querySelectorAll('input');
		this.divs = this.box.querySelectorAll('div');
	}
	Init.prototype.tab = function(){
//		console.log(this);
		var that = this;
		for(var i=0;i<this.btns.length;i++){
			(function(index){
				//console.log(that)
				that.btns[index].onclick = function(){
					//console.log(this);
					that.clear(index);
				};
			})(i);
		}
	}
	Init.prototype.clear = function (index){
		for(var i=0;i<this.btns.length;i++){
			this.btns[i].className = '';
			this.divs[i].className = '';
		}
		this.btns[index].className = 'active';
		this.divs[index].className = 'show';
	}
	
	var t1 = new Init('#box');
	t1.tab();
}