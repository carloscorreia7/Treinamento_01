$(document).ready(function(){
    $.ajax({
        url: "http://localhost:3000/funcionarios",
        type:"GET",
        dataType:"json",
        success: function (dados){
            dados.forEach(item => {
            $("#caixa_conteudo").append(`
                <div class='cartoes'>
                Cpf. Funcionario: ${item.cpf_do_funcionario} <br> 
                Nome_Funcionario:${item.nome_func} <br>
               Situacao: ${item.situacao} <br>
               Data.Nascimento:  ${item.data_nasc} </br>
               Nome.Setor: ${item.nome_setor} </br>

                </div>
                
                
                `);
            });
        },
        error:function(){
            alert("Falha ao consultar");
        }
    
    });
});
