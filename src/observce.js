/**
 * Created by User on 2018/9/29.
 */

var data={
    name:'kindeng'
};

observer(data);


/*
* observer 方法给所有的属性添加上getter/setter
* */

function observer (data){

    if(!data||typeof data !== 'object'){
       return;
    }

    Object.keys(data).forEach(function (key) {
        defineReactive(data,key,data[key])
    })
}

function defineReactive(data,key,val) {
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:false,
        get:function () {
            return val;
        },
        set:function (newVal) {
            console.log("监听到变化",val,'-->',newVal);
            val=newVal
        }

    })
}


