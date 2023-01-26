import tkinter as tk
from tkinter import ttk

janela = tk.Tk()
var_boolean = tk.BooleanVar()
botao_check = ttk.Checkbutton(text="Selecionar para verdadeiro", variable=var_boolean)
botao_check.pack()

janela.mainloop()

