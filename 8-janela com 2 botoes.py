#Pressionando Hello imprime: 'Tkinter é muito fácil de usar'

import tkinter as tk


def mensagem():
    print('Tkinter é muito fácil de usar')

janela = tk.Tk()
frame=tk.Frame(janela)
frame.pack()

botao_hello = tk.Button(frame,text="Hello", command=mensagem)
botao_hello.pack(side=tk.LEFT)
botao_sair = tk.Button(frame, text="Sair", fg="green", command=quit)
botao_sair.pack(side=tk.RIGHT)
janela.mainloop()
