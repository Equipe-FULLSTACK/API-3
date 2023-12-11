Equipe FULLSTACK - API 3º Semestre
==================================
**********************************

###  <div align="center"> Projeto API 3º Semestre: </div>
  ### <div align="center"> FATEC São José dos Campos - Prof. Jessen Vidal </div>

### <div align="center">Equipe-FULLSTACK </div>
 <div align="center"> <img src="/readme/fullstack.png" width="200" height="200"> </div>


   ### <div align="center"> Estado Atual do Projeto: </div>
  <br>

  #### <div align="center"> Sprint Review 1 </div>
  <div align="center">
  
  [<img src="https://i.ytimg.com/vi/D25dlZTuNJY/hqdefault.jpg?s…RhDIFQoZTAP&rs=AOn4CLCwS-tO39o4oldZxXAQP_gPy8t2jA" width="600" height="400" />](https://www.youtube.com/watch?v=D25dlZTuNJY)

  </div>

  <br>
  <div align="center">
  <img src="/readme/home.png" width="640" height="360"><br>
  <img src="/readme/autentic.png" width="640" height="360"><br>
  <img src="/readme/processos.png" width="640" height="360"><br>
  <img src="/readme/task.png" width="640" height="360"><br>
  <img src="/readme/adminFinal.png" width="640" height="360"><br>
  <img src="/readme/admin_final.png" width="640" height="360"><br>
  </div>
 
 
 # <div align="center"> Escopo do Projeto </div>
  
  #### <p align="center">
O escopo geral do projeto consiste em criar uma plataforma web abrangente para atender às necessidades da equipe regulatória e de toda a organização. Esta plataforma permitirá a criação personalizada de processos regulatórios, com a flexibilidade de definir etapas, responsáveis e prazos. Um painel de controle intuitivo fornecerá um monitoramento em tempo real, destacando as etapas concluídas e pendentes, enquanto os usuários poderão anexar evidências relevantes, como documentos e imagens, a cada etapa.

Além disso, o sistema garantirá notificações automáticas para alertar os responsáveis sobre etapas pendentes ou atrasadas. Os relatórios personalizados facilitarão a análise do desempenho e eficácia dos processos, enquanto a segurança e autenticação robustas garantirão o acesso apenas a usuários autorizados.

A plataforma será altamente compatível, funcionando em diversos navegadores e dispositivos e se integrará a sistemas externos para troca de dados.

Para facilitar a comunicação e colaboração, notificações externas via e-mail ou mensagens serão incorporadas para eventos críticos nos processos, e os membros da equipe poderão colaborar nas etapas do processo e discutir detalhes diretamente na plataforma. Além disso, haverá suporte a dispositivos móveis por meio de um aplicativo dedicado, e a automatização de fluxos de trabalho permitirá o acionamento automático de etapas subsequentes. Em resumo, o projeto visa fornecer uma solução abrangente para gerenciar e monitorar os processos regulatórios, garantindo conformidade, eficiência e colaboração em toda a organização.
  
  #### <p align="center">
  
  <br>
    
  #
  
  # <p align="center">Requisitos do Projeto</p>
  
  ## <p align="center">Requisitos Funcionais
 *Criação de Processos*
- RF1: Os usuários devem poder criar novos processos internos, definindo etapas, responsáveis e prazos.
- RF2: A plataforma deve permitir a personalização das etapas e a ordem de execução de acordo com as necessidades da equipe.
- RF3: Deve ser possível atribuir prioridades às etapas do processo.

*Acompanhamento em Tempo Real*
- RF4: A plataforma deve fornecer um painel de controle para visualização em tempo real do status de todos os processos em andamento.
- RF5: Os usuários devem poder filtrar e classificar os processos com base em diferentes critérios, como data, responsável ou estado.

*Geração de Evidências*
- RF6: Cada etapa do processo deve permitir a anexação de evidências, incluindo documentos, imagens e comentários.
- RF7: A plataforma deve suportar diferentes tipos de arquivos para anexação de evidências.

*Alertas e Notificações*
- RF8: O sistema deve enviar notificações automáticas aos responsáveis por etapas pendentes ou atrasadas.
- RF9: Os alertas devem ser configuráveis com base na urgência e importância das etapas.

*Relatórios e Análises*
- RF10: Os usuários devem ser capazes de gerar relatórios personalizados sobre o desempenho dos processos, incluindo o tempo médio de conclusão e atrasos recorrentes.
- RF11: A plataforma deve oferecer recursos de análise de dados para identificar tendências e áreas de melhoria.

*Segurança e Controle de Acesso*
- RF12: Deve ser implementado um sistema de autenticação seguro para garantir o acesso somente a usuários autorizados.
- RF13: A plataforma deve suportar diferentes níveis de permissão de acesso, incluindo administradores e usuários regulares.

*Personalização e Configuração*
- RF14: A personalização dos fluxos de trabalho deve incluir a adição, remoção ou reordenação de etapas.

*Integração de Dados*
- RF15: A plataforma deve permitir a integração com sistemas externos através de APIs para facilitar a troca de informações.
- RF16: Deve ser possível importar dados externos para iniciar ou atualizar processos automaticamente.
    
  #  

    
  ## <p align="center">Requisitos Não Funcionais
    *Desempenho*
- RNF1: A plataforma deve suportar o processamento simultâneo de, pelo menos, X processos sem degradação significativa do desempenho.
- RNF2: O tempo de resposta para carregar o painel de controle não deve exceder X segundos mesmo em momentos de pico de uso.

*Segurança*
- RNF3: A autenticação deve seguir as melhores práticas de segurança, como autenticação de dois fatores, para proteger as contas dos usuários.
- RNF4: As evidências anexadas às etapas dos processos devem ser criptografadas para garantir a confidencialidade.

*Disponibilidade*
- RNF5: A plataforma deve estar disponível para uso 24 horas por dia, 7 dias por semana, exceto durante manutenções programadas.
- RNF6: O tempo de inatividade planejado para manutenções não deve exceder X horas por mês.

*Usabilidade*
- RNF7: A interface do usuário deve ser intuitiva, com uma curva de aprendizado mínima para que os usuários possam interagir sem dificuldades.
- RNF8: O design responsivo deve garantir que a plataforma seja facilmente utilizável em dispositivos desktop e móveis.

*Compatibilidade*
- RNF9: A plataforma deve ser plenamente compatível com os navegadores mais recentes, como Chrome, Firefox e Edge.
- RNF10: A plataforma deve ser compatível com sistemas operacionais Windows e macOS.

*Escalabilidade*
- RNF11: A arquitetura da plataforma deve ser dimensionada horizontalmente para suportar um aumento substancial no número de usuários e processos.


#

## <p align="center">Requisitos de Interface

*Layout e Navegação*
- RI1: A interface deve ter um layout limpo e organizado, com uma navegação intuitiva para permitir fácil acesso às funcionalidades.
- RI2: Os ícones e rótulos de menu devem ser claros e representativos das funcionalidades correspondentes.

*Painel de Controle*
- RI3: O painel de controle inicial deve apresentar de forma clara os processos em andamento e seus respectivos status.
- RI4: Deve haver opções para filtrar os processos com base em diferentes critérios, como data ou responsável.

*Detalhes do Processo*
- RI5: A tela de detalhes do processo deve exibir as etapas, responsáveis, prazos e evidências associadas a cada etapa.
- RI6: Os usuários devem poder anexar novas evidências diretamente da tela de detalhes.

*Formulários e Entrada de Dados*
- RI7: Os formulários de entrada de dados devem ser intuitivos e orientados por contexto, solicitando apenas as informações relevantes para cada etapa.
- RI8: A validação em tempo real deve alertar os usuários sobre erros ou campos obrigatórios não preenchidos.

*Notificações e Alertas*
- RI9: As notificações de alerta devem ser apresentadas de forma visível e com clareza, incluindo informações sobre a etapa afetada.
- RI10: Deve ser possível visualizar e gerenciar todas as notificações em um local central.

*Relatórios e Gráficos*
- RI11: Os relatórios devem ser apresentados de maneira clara e visualmente compreensível, com gráficos quando apropriado.
- RI12: Os relatórios devem ser exportáveis para formatos populares, como PDF e planilhas.

*Compatibilidade com Dispositivos*
- RI13: A interface deve ser responsiva e se adaptar automaticamente a diferentes tamanhos de tela, incluindo dispositivos móveis.

*Acessibilidade (opcional)*
- RI14: A plataforma deve seguir as diretrizes de acessibilidade, como a WCAG, para garantir que usuários com deficiências tenham uma experiência acessível.

*Feedback ao Usuário*
- RI15: Sempre que uma ação for realizada com sucesso, a plataforma deve fornecer feedback visual ou auditivo para confirmar a ação.

  #
  

  
  
  # <p align="center">Product Backlog
  
  <div align="center">

  <img src="/readme/backlog_produto.jfif" width="640" height="360"><br>

  </div>
  
  <br>
  <br>
 
 
 
 ### <div align="center">Nossa Equipe</div>
 
 #
 
 
 
 
 
 
  
  <div align="center">
  <table style="align: center">
      <thead>
        <th>Nome</th>
        <th>Foto</th>
        <th>Função</th>
        <th>Contato</th>
      </thead>
      <tbody>
        <tr>
          <td>Pedro Cardoso</td>
          <td><img src="/readme/pedro.png" width="75px" height="75px"></td>
          <td>Product Owner</td>
          <td>
            <a href="https://phsc.rf.gd">Website</a><br>
            <a href="https://github.com/PhscZ">Github</a><br>
            <a href="https://linkedin.com/in/pedro-cardoso-6b93011b6/">Linkedin</a>
          </td>
        </tr>
        <tr>
          <td>Juliano Prado</td>
          <td><img src="/readme/juliano.png" width="75px" height="75px"></td>
          <td>Scrum Master</td>
          <td>
            <a href="https://github.com/julianopradoo">Github</a><br>
            <a href="https://linkedin.com/in/">Linkedin</a>
          </td>
        </tr>
        <tr>
          <td>Thiago Silva</td>
          <td><img src="/readme/thiago.png" width="75px" height="75px"></td>
          <td>Desenvolvedor</td>
          <td>
            <a href="https://github.com/thiagosilva89">Github</a><br>
            <a href="https://linkedin.com/in/thiago-c-silva-49bb74168">Linkedin</a>
          </td>
        </tr>
        <tr>
          <td>Leonardo Gazola</td>
          <td><img src="/readme/leo.jpg" width="75px" height="75px"></td>
          <td>Desenvolvedor</td>
          <td>
            <a href="https://github.com/Leonardo-Gazola-Medeiros">Github</a><br>
            <a href="https://linkedin.com/in/leonardo-gazola/">Linkedin</a>
          </td>
        </tr>
         <tr>
          <td>Ian Porto</td>
          <td><img src="/readme/Ian.jpg" width="75px" height="75px"></td>
          <td>Desenvolvedor</td>
          <td>
            <a href="https://github.com/ianportods2004">Github</a><br>
            <a href="https://linkedin.com/in/ian-porto-ds/">Linkedin</a>
          </td>
        </tr>
         <tr>
          <td>Jean Rodrigues</td>
          <td><img src="/readme/jean.png" width="75px" height="75px"></td>
          <td>Desenvolvedor</td>
          <td>
            <a href="https://github.com/JeanRodrigues1">Github</a><br>
            <a href="https://linkedin.com/in/">Linkedin</a>
          </td>
         </tr>
         <tr>
          <td>Willians Motta</td>
          <td><img src="/readme/will.png" width="75px" height="75px"></td>
          <td>Desenvolvedor</td>
          <td>
            <a href="https://github.com/williansmott4">Github</a><br>
            <a href="https://linkedin.com/in/">Linkedin</a>
          </td>
         </tr>
    </tbody>
  </table>
  <br>
  </div>
  
  
  
  
 

     
  
  
  # <p align="center">SPRINTS

  ## <a href="https://github.com/Equipe-FULLSTACK/API-3/tree/Sprint1">Primeira Sprint</a>
  ## <br>
  ## <a href="https://github.com/Equipe-FULLSTACK/API-3/tree/Sprint2">Segunda Sprint</a>
  ## <br>
  ## <a href="https://github.com/Equipe-FULLSTACK/API-3/tree/Sprint3">Terceira Sprint</a>
  ## <br>
  ## <a href="">Quarta Sprint</a>
  

  
