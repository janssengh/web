import tkinter as tk
from tkinter import messagebox

def mostrar():
    n = str_nome.get()
    e = str_email.get()
    s = str_senha.get()
    tk.messagebox.showinfo('Mensagem', f'Nome:{n}\nEmail:{e}\nSenha:{s}')

janela = tk.Tk()
janela.geometry("280x230")

nome = tk.Label(janela,text="Nome").place(x=30,y=50)
email = tk.Label(janela,text="Email").place(x=30,y=90)
senha = tk.Label(janela,text="Senha").place(x=30,y=130)

str_nome = tk.StringVar()
str_email = tk.StringVar()
str_senha = tk.StringVar()

entrada1 = tk.Entry(janela,textvariable=str_nome).place(x=85,y=50)
entrada2 = tk.Entry(janela,textvariable=str_email).place(x=85,y=90)
entrada3 = tk.Entry(janela,textvariable=str_senha).place(x=85,y=130)

botao_enviar = tk.Button(janela,text='Enviar',command=mostrar).place(x=120,y=170)

janela.mainloop()

