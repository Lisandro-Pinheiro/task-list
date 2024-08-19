Task List Manager
Descrição
Este projeto é uma aplicação simples de gerenciamento de tarefas construída com React. O usuário pode adicionar tarefas, marcar como concluídas ou incompletas, e filtrar para ver apenas as tarefas concluídas ou todas as tarefas.

Funcionalidades
Adicionar Tarefas: Permite adicionar novas tarefas à lista.
Marcar Tarefas como Concluídas/Incompletas: Cada tarefa possui um botão para alternar seu estado entre concluída e incompleta.
Filtrar Tarefas: Um botão permite alternar entre exibir todas as tarefas ou apenas as tarefas concluídas.
Componentes
TaskList
Este é o componente principal da aplicação. Ele gerencia o estado das tarefas e a interface do usuário.

Estados
tasks: Array de objetos que representa as tarefas. Cada tarefa tem um nome (name) e um estado de conclusão (completed).
taskName: String que armazena o nome da tarefa que está sendo criada.
filterCompleted: Boolean que indica se apenas tarefas concluídas devem ser exibidas.
Funções
addTask: Adiciona uma nova tarefa à lista de tarefas.
toggleTaskCompletion: Alterna o estado de uma tarefa entre concluída e incompleta.
filteredTasks: Filtra as tarefas com base no estado de filterCompleted.
Ícones
A aplicação utiliza a biblioteca React Icons para adicionar ícones intuitivos aos botões de ação:

FaCheck: Ícone de check utilizado para marcar uma tarefa como concluída.
FaUndoAlt: Ícone de seta circular utilizado para marcar uma tarefa como incompleta.
FaEye: Ícone de olho utilizado no botão de filtro para indicar que todas as tarefas estão sendo exibidas.
FaEyeSlash: Ícone de olho cortado utilizado no botão de filtro para indicar que apenas as tarefas concluídas estão sendo exibidas.
Estilos
A aplicação utiliza o arquivo TaskList.css para estilizar os componentes. O estilo inclui formatação para a tabela de tarefas, botões de ação, e o layout geral.


Como Executar o Projeto
Clone o repositório:


git clone https://github.com/Lisandro-Pinheiro/task-list.git
cd task-list

Instale as dependências:
npm install

Execute o projeto:
npm start

Abra o navegador:

A aplicação estará disponível em http://localhost:3000.
Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces de usuário.
React Icons: Biblioteca de ícones para React.
CSS: Para estilização da aplicação.
