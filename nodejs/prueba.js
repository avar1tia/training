

let sub = 2200;



module.exports.saludar = function saludar(){
    console.log("test call another file with an exposed function xD");
};

module.exports = {
    subs: sub,
    saludar: () =>{
        console.log('hola coder');
    },

    sumar : (a,b) => {
        return a + b;
    },

    mostrar : (a) => a + 10,
/*tambien se puede asi solo para una operacion
sumar: (a,b) => a+b

*/
}