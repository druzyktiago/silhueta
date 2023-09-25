// Exemplo de JavaScript simples para interatividade

// Captura o elemento h1 no cabeçalho
const headerTitle = document.querySelector('header h1');

// Altera o texto do cabeçalho quando a página é carregada
window.addEventListener('load', () => {
    headerTitle.textContent = 'Bem-vindo à Roupas de Bazar';
});
