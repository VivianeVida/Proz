nome_produto = input("Digite o nome do produto: ")
try:
    preco_produto = float(input("Digite o preço do produto: "))
except ValueError:
    print("Por favor, insira um valor numérico válido para o preço.")
    exit()

if preco_produto < 50.00:
    categoria = "baixo"
elif 50.00 <= preco_produto <= 100.06:
    categoria = "média"
else:
    categoria = "alto"

print(f"{nome_produto} com preço de R${preco_produto:.2f} é classificado como {categoria}.")