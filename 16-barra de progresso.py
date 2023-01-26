import tkinter as tk
from tkinter import ttk
from tkinter.ttk import Progressbar



janela = tk.Tk()

janela.title("Barra de progresso")
janela.geometry('350x200')

estilo = ttk.Style()
estilo.theme_use('default')
estilo.configure("black.Horizontal.TProgessbar", background='green')

barra = Progressbar(janela, length=220, style='red.Horizontal.TProgressbar')
barra['value'] = 80
barra.grid(column=0, row=0)

janela.mainloop()
