import tkinter as tk

janela = tk.Tk()
var_texto = tk.DoubleVar()
caixa_spin = tk.Spinbox(janela, from_=0.6, to=50.0, increment=.01, textvariable=var_texto)
caixa_spin.pack()

janela.mainloop()

