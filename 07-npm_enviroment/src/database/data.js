async function connectToDatabase(user,password) {
   if(user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE) {
       console.log("conectado ao banco de dados estabelecido.")
   }else {
       console.log("Falha de login, não foi possível se conectar ao banco de dados")
   } 
}


export default connectToDatabase;
