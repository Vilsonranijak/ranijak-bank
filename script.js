const input = document.getElementById("cpfInput");

input.addEventListener("keypress", () => {
  let cpf = input.value.replace(/[^\d]/g, "");

  cpf = cpf.replace(/\D/g, "");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  input.value = cpf;
});
