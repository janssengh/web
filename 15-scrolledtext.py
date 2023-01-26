import tkinter as tk
import tkinter.scrolledtext as tkst


janela = tk.Tk()

janela.title("Texto com rolagem")
janela.geometry('350x200')

scrolledText=tkst.ScrolledText(janela,width=40,height=10)
scrolledText.grid(column=0,row=0)
janela.mainloop()
