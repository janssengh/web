import tkinter as tk
from tkinter import ttk

janela = tk.Tk()
var_string = tk.StringVar()
combobox = ttk.Combobox(janela, textvariable = var_string, values=["python","Java","React"])
combobox.pack()
janela.mainloop()
print(var_string.get())
