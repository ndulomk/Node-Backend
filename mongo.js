const { default: mongoose } = require("mongoose");
const mongose = require("mongoose")

mongose.Promise = global.Promise;
mongose.connect("mongodb://localhost/kaluanda").then(()=>{
    console.log("Conectado com sucesso")

}).catch((err)=>{
    console.log("Erro to connect" + err)
})

// definindo model

const UserSchema =  mongoose.Schema({
    nome: {
        type: String,
        require: true

    },
    sobrenome:{
        type:String
    },
    email:{
        type:String,
        require: true
    },
    idade:{
        type:Number,
        require: true
    },
    pais:{
        type:String
    }

})

mongoose.model('Users', UserSchema)

const newUser = mongoose.model('Users')



new newUser({
    nome:"Edgar",
    sobrenome:"Janota",
    email:"e@gmail.com",
    idade:19,
    pais:"Angola"
}).save().then(()=>{
    console.log("Usuario cadastrado")
}).catch((err)=>{
    console.log("ERRO ao cadastrar" + err)
})