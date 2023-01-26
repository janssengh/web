import tkinter as tk

janela = tk.Tk()

texto=tk.Text(janela)
#insere uma string no início
texto.insert('1.0',"Praticando com Tkinter")
#insere uma string dentro da string anterior
texto.insert('1.10','Python')
#apaga o primeiro e último caractere e inclui uma nova linha
texto.delete('1.0')
texto.delete('end - 2 chars')
texto.pack()

janela.mainloop()

