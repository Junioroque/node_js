async function getBaseEmail(senderName : string) : Promise<string> {
    let base = await getHeaderText();
    
    base += `\n Olá ${senderName}, gostaria de me inscrever para a vaga`;
    base += "\n estou deixando o meu currículo";
    
    return base;
}

async function getHeaderText(): Promise<string> {
    return "EMAIL PARA VOCÊ"
}

export { getBaseEmail}; 

    
