
/*
* 在es5中创建常量
*
* */
export default function (){
      window.testA={};
    Object.defineProperty(window.testA,"PI2",{
        value:3.1415926,
        writable:false
    });
    console.log(window);







}
