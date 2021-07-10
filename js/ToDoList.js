function ToDoList() {
    this.arr = []

    this.themToDo = function (toDo) {
        this.arr.push(toDo);
    }

    this.tiViTri = function (id) {
        return this.arr.findIndex(function (p) {
            return id === p.id;
        });
    }
    this.xoaToDo = function (id) {
        var viTri = this.tiViTri(id);
        if (viTri !== -1) {
            this.arr.splice(viTri, 1);
        }
    }
  
    this.checkToDo = function(id){
        var viTri = this.tiViTri(id);
        if(viTri !== -1){
            this.arr[viTri].status = true;
           
        }  
    }
    this.checkCompleted = function(id){
        let viTri = this.tiViTri(id);
        if(viTri !==-1){
            this.arr[viTri].status = false;
        }

    }


};
