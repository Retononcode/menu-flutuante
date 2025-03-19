function toggleMenu() {
    var icons = document.getElementById('socialIcons');
    if (icons.style.display === 'flex') {
        icons.style.display = 'none';
    } else {
        icons.style.display = 'flex';
    }
}
function openModal() {
    document.getElementById('whatsappModal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('whatsappModal').style.display = 'none';
}
function enviarWhatsApp() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('mensagem').value;
    var numero = "55XXXXXXXXXXX"; // Coloque seu número de WhatsApp
    var url = `https://api.whatsapp.com/send?phone=${numero}&text=Nome:%20${nome}%0ATelefone:%20${telefone}%0AMensagem:%20${mensagem}`;
    window.open(url, '_blank');
}
