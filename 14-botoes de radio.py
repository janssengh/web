import tkinter as tk

janela = tk.Tk()

janela.title("Radiobutton")
janela.geometry('350x200')

radio1=tk.Radiobutton(janela,text='Primeiro',value=1)
radio2=tk.Radiobutton(janela,text='Segundo',value=2)
radio3=tk.Radiobutton(janela,text='Terceiro',value=3)

radio1.grid(column=0,row=0)
radio2.grid(column=1,row=0)
radio3.grid(column=2,row=0)
